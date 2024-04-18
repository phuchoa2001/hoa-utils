function cloneObject(obj) {
  if (obj == null || typeof obj !== 'object') {
    return {};
  }

  const clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof obj[i] == 'object')
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}

module.exports = cloneObject;
