module.exports = function slugify(value) {
  if (value === undefined || value === null) {
    return '';
  }
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
};
