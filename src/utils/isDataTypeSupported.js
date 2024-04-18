const typeCheck = require('./typeCheck');
const typeValues = require('../contants/typeValues');

function isDataTypeSupported(value) {
  const dataType = typeCheck(value);
  return Object.values(typeValues).includes(dataType);
}

module.exports = isDataTypeSupported;
