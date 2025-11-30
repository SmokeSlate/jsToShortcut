# AI workflows with js-to-shortcut

This guide is designed for AI agents or code-generation systems that need to
turn natural language instructions into working Apple Shortcuts using the
`js-to-shortcut` runtime.

## Action catalog for models

- `docs/README.md` contains a table-driven dump of every action exported by
  `actions/iOS-26/compiled.json`. Each section lists the identifier, synopsis,
  parameter keys, and output types exactly as Shortcuts expects them.
- Chunk the file per action when feeding it to a model. Identifiers such as
  `is.workflow.actions.gettext` or `com.apple.iBooks.openin` are what the
  runtime uses in `action('<identifier>', { ... })` calls.
- When a model needs a structured representation (for example to reason about
  allowed parameter keys), point it directly at `actions/iOS-26/compiled.json`.
  Each action entry mirrors the schema Shortcuts ships on macOS 15.4.

## Shortcut authoring checklist

1. Import the runtime helpers:
   ```js
   const runtime = require('js-to-shortcut');
   module.exports = ({
     action = runtime.action,
     defineShortcut = runtime.defineShortcut,
     serialization = runtime.serialization,
   } = runtime) => defineShortcut({ /* ... */ });
   ```
2. Build actions exclusively through `action('<identifier>', params)` so the
   registry can validate parameter keys and hydrate metadata.
3. Compose the final shortcut with `defineShortcut({ name, actions: [...] })`.
   The helper flattens nested arrays, fills default metadata, and ensures the
   workflow can be serialized into a `.shortcut` bundle.
4. Write the file by invoking the CLI:
   ```bash
   npx jstoshortcut examples/hello.shortcut.js --out dist/hello.shortcut
   ```
   HubSign runs automatically. Use `--no-hubsign` when a model needs to skip the
   upload phase (for example when working offline or during unit tests).

## Magic variables from JavaScript

- Every call to `action()` now receives a stable `UUID`, so the compiler can
  emit attachments that mimic Shortcuts' magic variables.
- Use `serialization.magicVariable(actionOrUUID, options)` to create a reference
  to an action's output. The helper accepts optional aggrandizements:
  ```js
  const fetchConfig = action('is.workflow.actions.dictionary', { /* ... */ });
  const updateURL = serialization.magicVariable(fetchConfig, {
    aggrandizements: [
      serialization.aggrandizements.dictionaryValue('updateUrl'),
      serialization.aggrandizements.coercion('WFStringContentItem'),
    ],
  });
  ```
- Interleave those references with regular strings through the
  `serialization.magicText` template tag. It automatically creates the
  `attachmentsByRange` payload expected inside text tokens:
  ```js
  action('is.workflow.actions.showresult', {
    Text: serialization.magicText`Latest version: ${updateURL}`,
  });
  ```
- Built-in variables (Repeat Item, Current Date, Shortcut Input, etc.) can be
  referenced by setting the `type` option: `serialization.magicVariable(null, { type: 'ExtensionInput' })`.

## Tooling workflow for agents

1. Generate or edit the `.shortcut.js` module.
2. Run `npx jstoshortcut <script>` to compile. Supply `--pretty` to obtain a JSON
   dump that can be diffed or reasoned about by the model.
3. Use `--list-actions` when you need to discover valid identifiers inside the
   current metadata bundle.
4. When targeting a different Shortcuts release, point `--metadata` at another
   `compiled.json` snapshot.

By following this checklist, an AI system can map natural language goals to a
series of action identifiers, wire them together with magic variables, and ship
HubSign-ready `.shortcut` files without ever touching the Shortcuts UI.
