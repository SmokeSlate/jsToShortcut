# jsToShortcut

Compile small JavaScript modules into fully-formed Apple Shortcuts property
lists. Write your shortcut steps in code, validate them against Apple's action
metadata, and emit a `.shortcut` bundle that you can AirDrop or import via
`shortcuts://import-workflow`.

## Getting started

```bash
npm install --save-dev js-to-shortcut

# Compile your shortcut and emit both a .shortcut and JSON preview
npx jstoshortcut path/to/shortcut.js --out build/shortcut.shortcut --pretty
```

> Working inside this repository? Run `npm install` once and continue to call
> `node src/cli.js ...` directly so you can test local changes without publishing.

The CLI loads `actions/MacOS-15.4/compiled.json` to make sure every call to
`action()` references a real identifier and the right parameter keys. Pass
`--metadata <path>` if you want to target a different Shortcuts release.

### Authoring a shortcut

Shortcut scripts export either:

1. A factory function that receives the compiler runtime helpers, or
2. A plain definition object created with `defineShortcut(...)`.

```js
// examples/hello.shortcut.js
const runtime = require('js-to-shortcut');

module.exports = ({
  action = runtime.action,
  defineShortcut = runtime.defineShortcut,
  serialization = runtime.serialization,
} = runtime) =>
  defineShortcut({
    name: 'Hello from js-to-shortcut',
    showInWidget: false,
    actions: [
      action('is.workflow.actions.comment', {
        WFCommentActionText: serialization.text('Generated via JS'),
      }),
      action('is.workflow.actions.gettext', {
        WFTextActionText: serialization.text('Hello world'),
      }),
    ],
  });
```

> When hacking on this repository directly, swap `require('js-to-shortcut')`
> with `require('../src')` so changes are reflected without publishing.

You can use any identifier from `actions/MacOS-15.4/compiled.json`. To see the
full list locally, run:

```bash
npx jstoshortcut path/to/any/script.js --list-actions
```

Parameters are validated by key (for example `WFCommentActionText`). The
`serialization` helpers (`text`, `number`, `boolean`, `array`, `dictionary`,
`raw`) create the structures that Shortcuts expects inside plist files. For
advanced scenarios you can always supply your own serialization dictionary.

#### Working with magic variables

Every action created through `runtime.action()` automatically receives a stable
`UUID`. You can reference that output later with
`serialization.magicVariable(...)` and splice it into text tokens using the
`serialization.magicText` template helper:

```js
const shortcutConfig = action('is.workflow.actions.dictionary', {
  WFItems: serialization.dictionary({
    updateUrl: serialization.text('https://example.com/status.json'),
  }),
});

const updateResponse = action('is.workflow.actions.getcontents', {
  WFURL: serialization.magicText`${serialization.magicVariable(
    shortcutConfig,
    {
      aggrandizements: [
        serialization.aggrandizements.dictionaryValue('updateUrl'),
      ],
    },
  )}`,
});

action('is.workflow.actions.comment', {
  WFCommentActionText: serialization.magicText`Latest payload: ${serialization.magicVariable(
    updateResponse,
  )}`,
});
```

The helper accepts optional aggrandizements so you can traverse dictionaries or
coerce output types (`serialization.aggrandizements.coercion('WFStringContentItem')`).
If you need to reference built-in variables (for example Repeat Item), pass
`magicVariable(null, { type: 'RepeatItem' })` and mix it into a `magicText`
template the same way.

### CLI reference

```
npx jstoshortcut <input> [--out file.shortcut] [--metadata actions.json]
  [--name "My Shortcut"] [--pretty] [--plist] [--list-actions]
  [--strict | --no-strict] [--hubsign]
```

- `--out` - destination `.shortcut`. Defaults to `<input-without-ext>.shortcut`.
- `--pretty` - also writes `<out>.json` with a readable dump of the final
  workflow dictionary.
- `--plist` - saves a human-readable XML plist as `<out>.plist` for debugging
  or manual inspection.
- `--metadata` - point to another `compiled.json`.
- `--name` - override the shortcut display name baked into metadata.
- `--list-actions` - print every known action identifier and exit.
- `--no-strict` - allow extra parameters on actions (useful when experimenting
  with undocumented keys).
- `--hubsign` - enabled by default; automatically sends the compiled shortcut to
  RoutineHub HubSign and overwrites the output with the signed result. Pass
  `--no-hubsign` to skip the upload.
- `--hubsign-name` - override the name passed to HubSign (defaults to the
  shortcut `name` field).
- `--hubsign-key` - supply a HubSign API key (only required for endpoints that
  expect it, e.g. the legacy `routinehub.co` API; you can also set
  `HUBSIGN_API_KEY`).
- `--hubsign-endpoint` - point to a different HubSign URL (useful for testing
  with staging endpoints).

### Signing with RoutineHub HubSign

The CLI mirrors the `curl` workflow used by HubSign and now opts-in by default.
Each compile uploads the `.shortcut` bundle, waits for the signed response, and
overwrites the local file. Pass `--no-hubsign` if you only want a local export.

```bash
npx jstoshortcut examples/hello.shortcut.js --out dist/hello.shortcut \
  --hubsign-name "Hello from js-to-shortcut"
```

The default endpoint (`https://hubsign.routinehub.services/sign`) only requires
the shortcut name/file, so no API key is needed. If you point the CLI at the
older `https://routinehub.co/api/v1/sign-shortcut` endpoint, pass
`--hubsign-key <key>` (or export `HUBSIGN_API_KEY`) so the `api_key` field is
included automatically.

Manual cURL equivalent for the default endpoint:

```bash
curl --location --request POST 'https://hubsign.routinehub.services/sign' \
  --form 'shortcut_name="Hello from js-to-shortcut"' \
  --form 'shortcut=@"dist/hello.shortcut"'

# The older RoutineHub API prefers the legacy field name:
#   --form 'shortcut_file=@"dist/hello.shortcut"'
```

The generated shortcut is a binary property list produced with
`bplist-creator`, so you can also rename it manually to `.shortcut` and import
it directly on macOS/iOS/iPadOS if you prefer to use the cURL flow yourself.

### Action reference for AI agents

The entire Shortcuts action catalog (names, identifiers, descriptions, and
parameters) is exported to `docs/actions.md`. Regenerate it at any time with:

```bash
npm run generate-docs
```

This file is designed to feed into AI workflows or code completion systems that
need structured documentation for every action available in
`actions/MacOS-15.4/compiled.json`. Each entry lists the official Shortcuts
output type identifiers (for example `com.apple.Bridge.BoldTextEntity`) so AI
agents can reason about the data produced by every action. Pair it with
`docs/AI_GUIDE.md` for prompt engineering tips and code patterns tailored to
language models.
