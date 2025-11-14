const ActionsRegistry = require('./actions-registry');
const buildAction = require('./create-action');
const encodeWorkflow = require('./encode-workflow');
const encodeWorkflowXML = require('./encode-workflow-xml');
const flatten = require('./flatten-actions');
const { buildWorkflow, normalizeDefinition } = require('./workflow');
const serialization = require('./serialization');

function createRuntime(options = {}) {
  const registry = new ActionsRegistry(options);

  const action = (identifier, params, actionOptions) =>
    buildAction(registry, identifier, params, actionOptions);

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
