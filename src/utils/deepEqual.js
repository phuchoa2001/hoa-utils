const isEqual = require('lodash/isEqual');

function deepEqual(x, y) {
  return isEqual(x, y);
}

module.exports = deepEqual;
