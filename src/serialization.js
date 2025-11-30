const ATTACHMENTS_EMPTY = Object.freeze({});
const MAGIC_ATTACHMENT_PLACEHOLDER = '\uFFFC';
const MAGIC_VARIABLE_SYMBOL = Symbol('MagicVariable');

function ensureWFSerialization(candidate) {
  return (
    candidate &&
    typeof candidate === 'object' &&
    'WFSerializationType' in candidate &&
    'Value' in candidate
  );
}

function inferItemTypeFromSerialization(serialization) {
  switch (serialization.WFSerializationType) {
    case 'WFDictionaryFieldValue':
      return 1;
    case 'WFArrayParameterState':
      return 2;
    case 'WFNumberSubstitutableState':
      return typeof serialization.Value === 'boolean' ? 4 : 3;
    default:
      return 0;
  }
}

function buildTextToken(value = '', attachments = ATTACHMENTS_EMPTY) {
  const normalizedAttachments =
    attachments &&
    attachments !== ATTACHMENTS_EMPTY &&
    Object.keys(attachments).length
      ? attachments
      : ATTACHMENTS_EMPTY;
  return {
    Value: {
      string: String(value),
      attachmentsByRange: normalizedAttachments,
    },
    WFSerializationType: 'WFTextTokenString',
  };
}

function text(value = '') {
  return buildTextToken(value);
}

function number(value = 0) {
  return {
    Value: Number(value),
    WFSerializationType: 'WFNumberSubstitutableState',
  };
}

function boolean(value = false) {
  return {
    Value: Boolean(value),
    WFSerializationType: 'WFNumberSubstitutableState',
  };
}

function buildDictionaryFieldItem(key, value) {
  const { serialization, itemType } = normalizeValue(value);
  const item = {
    WFItemType: itemType,
    WFValue: serialization,
  };
  if (key !== undefined) {
    item.WFKey = text(key);
  }
  return item;
}

function array(values = []) {
  const normalizedItems = values.map((entry) => buildDictionaryFieldItem(undefined, entry));
  return {
    Value: normalizedItems,
    WFSerializationType: 'WFArrayParameterState',
  };
}

function dictionary(entries = {}) {
  const items = Object.entries(entries).map(([key, value]) =>
    buildDictionaryFieldItem(key, value),
  );
  return {
    Value: {
      WFDictionaryFieldValueItems: items,
    },
    WFSerializationType: 'WFDictionaryFieldValue',
  };
}

function normalizeValue(value) {
  if (ensureWFSerialization(value)) {
    return {
      serialization: value,
      itemType: inferItemTypeFromSerialization(value),
    };
  }

  if (Array.isArray(value)) {
    return {
      serialization: array(value),
      itemType: 2,
    };
  }

  if (value !== null && typeof value === 'object') {
    return {
      serialization: dictionary(value),
      itemType: 1,
    };
  }

  if (typeof value === 'number') {
    return {
      serialization: number(value),
      itemType: 3,
    };
  }

  if (typeof value === 'boolean') {
    return {
      serialization: boolean(value),
      itemType: 4,
    };
  }

  return {
    serialization: text(value),
    itemType: 0,
  };
}

function raw(value) {
  return value;
}

function unwrapMagicVariable(candidate) {
  if (candidate && candidate[MAGIC_VARIABLE_SYMBOL]) {
    return candidate[MAGIC_VARIABLE_SYMBOL];
  }
  return undefined;
}

function resolveActionUUID(action) {
  if (!action) {
    return undefined;
  }
  if (typeof action === 'string') {
    return action;
  }
  if (
    action.WFWorkflowActionParameters &&
    typeof action.WFWorkflowActionParameters === 'object' &&
    action.WFWorkflowActionParameters.UUID
  ) {
    return action.WFWorkflowActionParameters.UUID;
  }
  if (action.UUID) {
    return action.UUID;
  }
  return undefined;
}

function normalizeAggrandizement(entry) {
  if (!entry) {
    return undefined;
  }
  if (typeof entry === 'string') {
    return {
      Type: 'WFPropertyVariableAggrandizement',
      Property: entry,
    };
  }
  if (typeof entry === 'object' && entry.Type) {
    return entry;
  }
  throw new Error(
    'Magic variable aggrandizements must be strings or objects with a Type property.',
  );
}

function magicVariable(source, options = {}) {
  const type = options.type || 'ActionOutput';
  const payload = {
    Type: type,
  };

  const uuid = options.uuid || resolveActionUUID(source);
  if (type === 'ActionOutput' && !uuid) {
    throw new Error(
      'Magic variable references to action output require a UUID. Pass `{ UUID: ... }` when creating the action or rely on automatic UUID generation.',
    );
  }
  if (uuid) {
    payload.OutputUUID = uuid;
  }
  if (options.outputName) {
    payload.OutputName = options.outputName;
  }
  const aggrandizements = (options.aggrandizements || [])
    .map(normalizeAggrandizement)
    .filter(Boolean);
  if (aggrandizements.length) {
    payload.Aggrandizements = aggrandizements;
  }

  return {
    [MAGIC_VARIABLE_SYMBOL]: payload,
  };
}

function magicText(strings, ...values) {
  const parts = Array.isArray(strings) ? strings : [strings || ''];
  let cursor = 0;
  let built = '';
  let attachments = ATTACHMENTS_EMPTY;

  const appendText = (chunk) => {
    if (chunk === undefined || chunk === null) {
      return;
    }
    const segment = String(chunk);
    built += segment;
    cursor += segment.length;
  };

  for (let index = 0; index < parts.length; index += 1) {
    appendText(parts[index]);
    if (index >= values.length) {
      continue;
    }
    const value = values[index];
    const magicPayload = unwrapMagicVariable(value);
    if (magicPayload) {
      if (attachments === ATTACHMENTS_EMPTY) {
        attachments = {};
      }
      attachments[`{${cursor}, 1}`] = magicPayload;
      built += MAGIC_ATTACHMENT_PLACEHOLDER;
      cursor += 1;
      continue;
    }
    appendText(value);
  }

  return buildTextToken(built, attachments);
}

function dictionaryValueAggrandizement(key) {
  return {
    Type: 'WFDictionaryValueVariableAggrandizement',
    DictionaryKey: key,
  };
}

function propertyAggrandizement(property) {
  return {
    Type: 'WFPropertyVariableAggrandizement',
    Property: property,
  };
}

function coercionAggrandizement(className) {
  return {
    Type: 'WFCoercionVariableAggrandizement',
    CoercionItemClass: className,
  };
}

module.exports = {
  array,
  boolean,
  dictionary,
  number,
  raw,
  text,
  magicVariable,
  magicText,
  aggrandizements: {
    dictionaryValue: dictionaryValueAggrandizement,
    property: propertyAggrandizement,
    coercion: coercionAggrandizement,
  },
  normalizeValue,
};
