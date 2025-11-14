const slugify = require('./utils/slugify');

const COMMON_PARAMETER_KEYS = new Set([
  'GroupingIdentifier',
  'UUID',
  'WFWorkflowActionUUID',
  'WFWorkflowActionUserUUID',
  'CustomOutputName',
]);

function createParameterResolver(action) {
  if (!action.__parameterAliases) {
    const aliases = new Map();
    (action.arguments || []).forEach((argument) => {
      const { key } = argument;
      if (!key) {
        return;
      }
      aliases.set(key, key);
      aliases.set(key.toLowerCase(), key);
      aliases.set(slugify(key), key);
    });
    COMMON_PARAMETER_KEYS.forEach((key) => {
      aliases.set(key, key);
      aliases.set(key.toLowerCase(), key);
    });
    action.__parameterAliases = aliases;
  }
  return action.__parameterAliases;
}

function normalizeParameters(action, provided = {}, options = {}) {
  const strict = options.strict !== false;
  const normalized = {};
  const resolver = createParameterResolver(action);
  Object.entries(provided).forEach(([rawKey, value]) => {
    const key =
      resolver.get(rawKey) ||
      resolver.get(rawKey.toLowerCase()) ||
      resolver.get(slugify(rawKey));
    if (!key) {
      if (!strict) {
        normalized[rawKey] = value;
        return;
      }
      const validKeys = Array.from(
        new Set((action.arguments || []).map((arg) => arg.key)),
      ).join(', ');
      throw new Error(
        `Unknown parameter "${rawKey}" for action "${action.name}". Expected one of: ${validKeys}`,
      );
    }
    normalized[key] = value;
  });
  return normalized;
}

function buildAction(registry, identifier, parameters, options = {}) {
  const { id, action } = registry.resolve(identifier);
  const normalizedParameters = normalizeParameters(
    action,
    parameters,
    options,
  );
  const result = {
    WFWorkflowActionIdentifier: id,
    WFWorkflowActionParameters: normalizedParameters,
  };

  if (options.uuid) {
    result.UUID = options.uuid;
  }
  return result;
}

module.exports = buildAction;
