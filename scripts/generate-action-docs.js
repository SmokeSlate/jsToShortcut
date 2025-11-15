#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function loadActions(metadataPath) {
  const absolute = path.resolve(metadataPath);
  if (!fs.existsSync(absolute)) {
    throw new Error(`Compiled metadata not found at ${absolute}`);
  }
  const raw = fs.readFileSync(absolute, 'utf8');
  const data = JSON.parse(raw);
  if (!data.actions) {
    throw new Error('Compiled metadata is missing an "actions" key.');
  }
  return data.actions;
}

function escapeMarkdown(value) {
  return String(value || '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, '<br/>')
    .trim();
}

function buildDocumentation(actions, sourcePath) {
  const entries = Object.entries(actions).map(([id, action]) => {
    const name = action.name || id;
    return {
      id,
      name,
      description: action.description,
      arguments: (action.arguments || []).slice().sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      }),
      notes: action.notes || [],
      outputTypes: Array.isArray(action.outputTypes)
        ? action.outputTypes
        : [],
    };
  });

  entries.sort((a, b) => a.name.localeCompare(b.name));

  const lines = [];
  lines.push('# Apple Shortcuts Action Reference');
  lines.push('');
  lines.push(
    'This document was auto-generated from `actions/MacOS-15.4/compiled.json` ' +
      `(source: \`${path.relative(process.cwd(), sourcePath)}\`).`,
  );
  lines.push('');
  lines.push(
    'Use these action identifiers inside `action("<identifier>", { ...parameters })` ' +
      'when building shortcuts with js-to-shortcut. Each action lists the known parameters ' +
      'and any descriptions exported by Shortcuts on macOS 15.4.',
  );
  lines.push('');

  entries.forEach((entry) => {
    lines.push(`## ${entry.name} (\`${entry.id}\`)`);
    lines.push('');
    if (entry.description) {
      lines.push(entry.description.trim());
      lines.push('');
    }

    if (entry.notes && entry.notes.length) {
      entry.notes.forEach((note) => {
        lines.push(`> ${note}`);
      });
      lines.push('');
    }

    if (entry.outputTypes.length) {
      const rendered = entry.outputTypes
        .map((type) => `\`${escapeMarkdown(type)}\``)
        .join(', ');
      lines.push(`**Output Types:** ${rendered}`);
      lines.push('');
    }

    if (!entry.arguments.length) {
      lines.push('_This action does not expose any parameters._');
      lines.push('');
      return;
    }

    lines.push('| Key | Display Name | Description |');
    lines.push('| --- | --- | --- |');
    entry.arguments.forEach((argument) => {
      const key = escapeMarkdown(argument.key);
      const display = escapeMarkdown(argument.name || argument.key);
      const desc = escapeMarkdown(argument.description || '');
      lines.push(`| \`${key}\` | ${display} | ${desc} |`);
    });
    lines.push('');
  });

  return `${lines.join('\n').trim()}\n`;
}

function main() {
  const metadataPath =
    process.argv[2] || path.join('actions', 'iOS-26', 'compiled.json');
  const outputPath = process.argv[3] || path.join('docs', 'actions.md');
  const actions = loadActions(metadataPath);
  const documentation = buildDocumentation(actions, metadataPath);
  const absoluteOutput = path.resolve(outputPath);
  fs.mkdirSync(path.dirname(absoluteOutput), { recursive: true });
  fs.writeFileSync(absoluteOutput, documentation, 'utf8');
  console.log(`Action documentation written to ${absoluteOutput}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
