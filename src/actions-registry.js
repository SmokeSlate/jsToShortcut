const fs = require('fs');
const path = require('path');

const { DEFAULT_METADATA_PATH } = require('./constants');
const slugify = require('./utils/slugify');

const CACHE = new Map();

function normalizeMetadataPath(metadataPath) {
  const absolute = metadataPath
    ? path.resolve(metadataPath)
    : DEFAULT_METADATA_PATH;
  return absolute;
}

function ensureMetadata(metadataPath) {
  const absolute = normalizeMetadataPath(metadataPath);
  if (CACHE.has(absolute)) {
    return CACHE.get(absolute);
  }

  const raw = fs.readFileSync(absolute, 'utf8');
  const parsed = JSON.parse(raw);
  const actions = parsed.actions || {};

  const idLookup = new Map();
  const aliasLookup = new Map();
  Object.entries(actions).forEach(([id, action]) => {
    const lowerId = id.toLowerCase();
    idLookup.set(id, { ...action, id });
    idLookup.set(lowerId, { ...action, id });

    const localAliases = new Set();
    const segments = id.split('.');
    if (segments.length) {
      localAliases.add(slugify(segments[segments.length - 1]));
    }
    if (action.name) {
      localAliases.add(slugify(action.name));
    }

    localAliases.forEach((alias) => {
      if (!alias) {
        return;
      }
      const existing = aliasLookup.get(alias);
      if (existing) {
        existing.add(id);
      } else {
        aliasLookup.set(alias, new Set([id]));
      }
    });
  });

  const payload = {
    metadata: parsed.metadata,
    actions,
    idLookup,
    aliasLookup,
    absolute,
  };
  CACHE.set(absolute, payload);
  return payload;
}

class ActionsRegistry {
  constructor(options = {}) {
    this.metadataPath = normalizeMetadataPath(options.metadataPath);
    this._data = null;
  }

  _ensureLoaded() {
    if (!this._data) {
      this._data = ensureMetadata(this.metadataPath);
    }
    return this._data;
  }

  list() {
    const { actions } = this._ensureLoaded();
    return Object.entries(actions)
      .map(([id, action]) => ({
        id,
        name: action.name || id,
        description: action.description || '',
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  resolve(identifier) {
    if (!identifier) {
      throw new Error('An action identifier or name is required.');
    }
    const { idLookup, aliasLookup, actions } = this._ensureLoaded();
    const direct = idLookup.get(identifier);
    if (direct) {
      return { id: direct.id, action: actions[direct.id] };
    }

    const lower = idLookup.get(String(identifier).toLowerCase());
    if (lower) {
      return { id: lower.id, action: actions[lower.id] };
    }

    const candidateAlias = slugify(identifier);
    if (!candidateAlias) {
      throw new Error(
        `Unable to resolve action from value "${identifier}".`,
      );
    }

    const aliasMatches = aliasLookup.get(candidateAlias);
    if (!aliasMatches || aliasMatches.size === 0) {
      throw new Error(
        `No action found for "${identifier}". Try the full Shortcut identifier (e.g. "is.workflow.actions.comment").`,
      );
    }

    if (aliasMatches.size > 1) {
      const names = Array.from(aliasMatches).join(', ');
      throw new Error(
        `The name "${identifier}" is ambiguous. Please use one of the specific identifiers: ${names}`,
      );
    }

    const [match] = aliasMatches;
    return { id: match, action: actions[match] };
  }
}

module.exports = ActionsRegistry;
