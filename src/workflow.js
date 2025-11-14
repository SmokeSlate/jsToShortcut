const { DEFAULT_ICON, DEFAULT_INPUT_CLASSES } = require('./constants');
const flatten = require('./flatten-actions');

function resolveIcon(icon = {}) {
  let colorValue = icon.color ?? DEFAULT_ICON.color;
  if (typeof colorValue === 'string') {
    let hex = colorValue.replace('#', '');
    if (hex.length === 6) {
      hex += 'ff';
    }
    colorValue = Number.parseInt(hex, 16);
  }

  return {
    WFWorkflowIconStartColor: Number(colorValue) >>> 0,
    WFWorkflowIconGlyphNumber: icon.glyph ?? DEFAULT_ICON.glyph,
  };
}

function normalizeDefinition(definition = {}) {
  const normalizedActions = flatten(definition.actions || []);
  normalizedActions.forEach((action, index) => {
    if (
      !action ||
      typeof action !== 'object' ||
      !action.WFWorkflowActionIdentifier
    ) {
      throw new Error(
        `Action at index ${index} is invalid. Use the runtime's action() helper to build actions.`,
      );
    }
  });

  return {
    name: definition.name || 'Untitled Shortcut',
    icon: resolveIcon(definition.icon),
    showInWidget: definition.showInWidget !== false,
    importQuestions: definition.importQuestions || [],
    types: definition.types,
    inputClasses: definition.inputClasses || DEFAULT_INPUT_CLASSES,
    actions: normalizedActions,
    clientVersion: definition.clientVersion || '724',
    clientRelease: definition.clientRelease || '2.1',
  };
}

function buildWorkflow(definition = {}) {
  const normalized = normalizeDefinition(definition);
  const types =
    normalized.types ||
    [
      'WatchKit',
      ...(normalized.showInWidget ? ['NCWidget'] : []),
    ];

  return {
    WFWorkflowClientVersion: normalized.clientVersion,
    WFWorkflowClientRelease: normalized.clientRelease,
    WFWorkflowIcon: normalized.icon,
    WFWorkflowImportQuestions: normalized.importQuestions,
    WFWorkflowTypes: types,
    WFWorkflowInputContentItemClasses: normalized.inputClasses,
    WFWorkflowActions: normalized.actions,
  };
}

module.exports = {
  buildWorkflow,
  normalizeDefinition,
};
