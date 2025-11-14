const plist = require('plist');

function encodeWorkflowXML(workflow) {
  return plist.build(workflow, { indent: '\t' });
}

module.exports = encodeWorkflowXML;
