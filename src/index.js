const crypto = require('crypto');
const ActionsRegistry = require('./actions-registry');
const buildAction = require('./create-action');
const encodeWorkflow = require('./encode-workflow');
const encodeWorkflowXML = require('./encode-workflow-xml');
const flatten = require('./flatten-actions');
const { buildWorkflow, normalizeDefinition } = require('./workflow');
const serialization = require('./serialization');

function fallbackUUID() {
  const bytes = crypto.randomBytes(16);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = bytes.toString('hex');
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20),
  ].join('-');
}

function generateUUID() {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return fallbackUUID();
}

function createRuntime(options = {}) {
  const registry = new ActionsRegistry(options);
  const autoUUID = options.autoUUID !== false;
  const uuidFactory =
    typeof options.generateUUID === 'function'
      ? options.generateUUID
      : () => generateUUID();

  const action = (identifier, params, actionOptions = {}) => {
    const finalOptions = { ...actionOptions };
    if (
      autoUUID &&
      !finalOptions.uuid &&
      !(params && Object.prototype.hasOwnProperty.call(params, 'UUID'))
    ) {
      finalOptions.uuid = uuidFactory();
    }
    return buildAction(registry, identifier, params, finalOptions);
  };

  const defineShortcut = (definition) => normalizeDefinition({
    ...definition,
    actions: flatten(definition?.actions || []),
  });

  return {
    action,
    defineShortcut,
    serialization,
    registry,
  };
}

function compileShortcut(definition, options) {
  const workflow = buildWorkflow(definition, options);
  return encodeWorkflow(workflow);
}

const defaultRuntime = createRuntime();

module.exports = {
  action: defaultRuntime.action,
  createRuntime,
  defineShortcut: defaultRuntime.defineShortcut,
  serialization,
  buildWorkflow,
  normalizeDefinition,
  encodeWorkflow,
  encodeWorkflowXML,
  compileShortcut,
};
