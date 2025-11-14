#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const {
  createRuntime,
  buildWorkflow,
  encodeWorkflow,
  encodeWorkflowXML,
} = require('./index');
const { signShortcut } = require('./hubsign');

async function loadModule(filePath) {
  const absolute = path.resolve(filePath);
  const extension = path.extname(absolute).toLowerCase();
  if (extension === '.mjs' || extension === '.ts') {
    const moduleUrl = pathToFileURL(absolute).href;
    const imported = await import(moduleUrl);
    return imported.default || imported;
  }

  delete require.cache[absolute];
  const required = require(absolute);
  return required && required.__esModule ? required.default : required;
}

async function loadDefinition(entry, runtime) {
  const exported = await loadModule(entry);
  if (typeof exported === 'function') {
    return exported(runtime);
  }
  return exported;
}

async function main(argv) {
  const cli = yargs(hideBin(argv))
    .scriptName('jstoshortcut')
    .usage('$0 <input> [options]')
    .command('$0 <input>', 'Compile a shortcut definition', (y) =>
      y
        .positional('input', {
          describe: 'Path to the shortcut JS file',
          type: 'string',
        })
        .option('out', {
          alias: 'o',
          describe: 'Destination shortcut file (.shortcut)',
          type: 'string',
        })
        .option('metadata', {
          alias: 'm',
          describe: 'Path to compiled actions metadata',
          type: 'string',
        })
        .option('name', {
          alias: 'n',
          describe: 'Override the shortcut name metadata',
          type: 'string',
        })
        .option('list-actions', {
          alias: 'l',
          describe: 'List available action identifiers',
          type: 'boolean',
          default: false,
        })
        .option('pretty', {
          alias: 'p',
          describe: 'Also emit a human-readable JSON file',
          type: 'boolean',
          default: false,
        })
        .option('plist', {
          describe: 'Write the raw plist alongside the .shortcut file',
          type: 'boolean',
          default: false,
        })
        .option('strict', {
          describe: 'Fail when unknown action parameters are supplied',
          type: 'boolean',
          default: true,
        })
        .option('hubsign', {
          describe: 'Send the compiled shortcut to RoutineHub HubSign',
          type: 'boolean',
          default: false,
        })
        .option('hubsign-name', {
          describe: 'Override the HubSign shortcut name',
          type: 'string',
        })
        .option('hubsign-endpoint', {
          describe: 'Custom HubSign endpoint (advanced)',
          type: 'string',
        })
        .option('hubsign-key', {
          describe: 'RoutineHub HubSign API key (or set HUBSIGN_API_KEY)',
          type: 'string',
        }),
    )
    .help();

  const args = cli.parse();
  const entry = args.input;
  if (!entry) {
    cli.showHelp();
    process.exit(1);
    return;
  }

  const runtime = createRuntime({ metadataPath: args.metadata });
  if (args.listActions) {
    runtime.registry.list().forEach((action) => {
      process.stdout.write(`${action.id.padEnd(40)} ${action.name}\n`);
    });
    process.exit(0);
    return;
  }

  const definition = await loadDefinition(entry, {
    ...runtime,
    action: (identifier, params, options = {}) =>
      runtime.action(identifier, params, {
        ...options,
        strict: args.strict,
      }),
  });

  if (!definition || typeof definition !== 'object') {
    throw new Error(
      `The shortcut script "${entry}" must export a definition object or a factory function.`,
    );
  }

  if (args.name) {
    definition.name = args.name;
  }

  const workflow = buildWorkflow(definition);
  const plistData = encodeWorkflow(workflow);

  const baseName = path.basename(entry, path.extname(entry));
  const sanitizedBase = baseName.replace(/\.shortcut$/i, '');

  const fallbackOut = path.format({
    dir: path.dirname(path.resolve(entry)),
    name: sanitizedBase || baseName,
    ext: '.shortcut',
  });
  const outPath = path.resolve(args.out || fallbackOut);
  await fs.promises.mkdir(path.dirname(outPath), { recursive: true });
  await fs.promises.writeFile(outPath, plistData);

  if (args.pretty) {
    const jsonPath = `${outPath}.json`;
    await fs.promises.writeFile(
      jsonPath,
      JSON.stringify(workflow, null, 2),
      'utf8',
    );
  }

  if (args.plist) {
    const plistPath = `${outPath}.plist`;
    const plistXml = `${encodeWorkflowXML(workflow)}\n`;
    await fs.promises.writeFile(plistPath, plistXml, 'utf8');
  }

  let finalOutputPath = outPath;
  if (args.hubsign) {
    const hubsignName =
      args.hubsignName || definition.name || path.basename(outPath);
    const result = await signShortcut({
      shortcutPath: outPath,
      name: hubsignName,
      endpoint: args.hubsignEndpoint,
      apiKey: args.hubsignKey || process.env.HUBSIGN_API_KEY,
    });
    finalOutputPath = result.path;
    process.stdout.write(
      `HubSign completed (${(result.size / 1024).toFixed(1)} KiB)\n`,
    );
  }

  const relative = path.relative(process.cwd(), finalOutputPath) || finalOutputPath;
  process.stdout.write(
    `Shortcut compiled with ${workflow.WFWorkflowActions.length} actions -> ${relative}\n`,
  );
}

main(process.argv).catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
