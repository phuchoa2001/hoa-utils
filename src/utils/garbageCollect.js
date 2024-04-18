const typeValues = require('../contants/typeValues');
const typeCheck = require('./typeCheck');
const isDataTypeSupported = require('./isDataTypeSupported');

function garbageCollect(value) {
  const dataType = typeCheck(value);

  if (isDataTypeSupported(value)) {
    if (dataType === 'object' || dataType === 'array') {
      for (const prop in value) {
        if (value.hasOwnProperty(prop)) {
          garbageCollect(value[prop]);
        }
      }
    }
    value = null;
  } else {
    return `Error: Unsupported data type.`;
  }
}

module.exports = garbageCollect;
