const createBplist = require('bplist-creator');

function encodeWorkflow(workflow) {
  return createBplist(workflow);
}

module.exports = encodeWorkflow;
