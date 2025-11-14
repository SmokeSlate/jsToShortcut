const path = require('path');

const DEFAULT_ICON = Object.freeze({
  color: 0xfe9f2fff, // Apple's default orange used for Comment + Text
  glyph: 59446,
});

const DEFAULT_INPUT_CLASSES = Object.freeze([
  'WFAppStoreAppContentItem',
  'WFArticleContentItem',
  'WFContactContentItem',
  'WFDateContentItem',
  'WFEmailAddressContentItem',
  'WFGenericFileContentItem',
  'WFImageContentItem',
  'WFiTunesProductContentItem',
  'WFLocationContentItem',
  'WFDCMapsLinkContentItem',
  'WFAVAssetContentItem',
  'WFPDFContentItem',
  'WFPhoneNumberContentItem',
  'WFRichTextContentItem',
  'WFSafariWebPageContentItem',
  'WFStringContentItem',
  'WFURLContentItem',
]);

const DEFAULT_METADATA_PATH = path.resolve(
  __dirname,
  '..',
  'actions',
  'MacOS-15.4',
  'compiled.json',
);

module.exports = {
  DEFAULT_ICON,
  DEFAULT_INPUT_CLASSES,
  DEFAULT_METADATA_PATH,
};
