function flatten(actions) {
  const result = [];
  const visit = (item) => {
    if (!item) {
      return;
    }
    if (Array.isArray(item)) {
      item.forEach(visit);
      return;
    }
    result.push(item);
  };
  visit(actions);
  return result;
}

module.exports = flatten;
