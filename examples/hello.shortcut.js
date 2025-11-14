const runtime = require('../src');

module.exports = ({
  action = runtime.action,
  defineShortcut = runtime.defineShortcut,
  serialization = runtime.serialization,
} = runtime) =>
  defineShortcut({
    name: 'Hello from js-to-shortcut',
    showInWidget: false,
    icon: {
      color: '#ff9f0a',
      glyph: 59765,
    },
    actions: [
      action('is.workflow.actions.comment', {
        WFCommentActionText: serialization.text(
          'Generated via the js-to-shortcut compiler.',
        ),
      }),
      action('is.workflow.actions.gettext', {
        WFTextActionText: serialization.text('Hello from JavaScript'),
      }),
    ],
  });
