const ATTACHMENTS_EMPTY = Object.freeze({});

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

function text(value = '') {
  return {
    Value: {
      string: String(value),
      attachmentsByRange: ATTACHMENTS_EMPTY,
    },
    WFSerializationType: 'WFTextTokenString',
  };
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

module.exports = {
  array,
  boolean,
  dictionary,
  number,
  raw,
  text,
  normalizeValue,
};
