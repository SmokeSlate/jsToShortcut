# jsToShortcut

Compile small JavaScript modules into fully-formed Apple Shortcuts property
lists. Write your shortcut steps in code, validate them against Apple's action
metadata, and emit a `.shortcut` bundle that you can AirDrop or import via
`shortcuts://import-workflow`.

## Getting started

```bash
npm install

# Build the example shortcut and emit both a .shortcut and JSON preview
node src/cli.js examples/hello.shortcut.js --out build/hello.shortcut --pretty
```

The CLI loads `actions/MacOS-15.4/compiled.json` to make sure every call to
`action()` references a real identifier and the right parameter keys. Pass
`--metadata <path>` if you want to target a different Shortcuts release.

### Authoring a shortcut

Shortcut scripts export either:

1. A factory function that receives the compiler runtime helpers, or
2. A plain definition object created with `defineShortcut(...)`.

```js
// examples/hello.shortcut.js
const runtime = require('../src');

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

You can use any identifier from `actions/MacOS-15.4/compiled.json`. To see the
full list, run:

```bash
node src/cli.js --list-actions path/to/any/script.js
```

Parameters are validated by key (for example `WFCommentActionText`). The
`serialization` helpers (`text`, `number`, `boolean`, `array`, `dictionary`,
`raw`) create the structures that Shortcuts expects inside plist files. For
advanced scenarios you can always supply your own serialization dictionary.

### CLI reference

```
node src/cli.js <input> [--out file.shortcut] [--metadata actions.json]
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
- `--hubsign` - automatically send the compiled shortcut to RoutineHub HubSign
  and replace the local file with the signed result.
- `--hubsign-name` - override the name passed to HubSign (defaults to the
  shortcut `name` field).
- `--hubsign-key` - supply a HubSign API key (only required for endpoints that
  expect it, e.g. the legacy `routinehub.co` API; you can also set
  `HUBSIGN_API_KEY`).
- `--hubsign-endpoint` - point to a different HubSign URL (useful for testing
  with staging endpoints).

### Signing with RoutineHub HubSign

The CLI can replicate the `curl` workflow used by HubSign. Add `--hubsign` to
the compile command and it will POST the `.shortcut` bundle and overwrite it
with the returned, signed file.

```bash
node src/cli.js examples/hello.shortcut.js --out dist/hello.shortcut \
  --hubsign --hubsign-name "Hello from js-to-shortcut"
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
