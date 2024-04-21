const { isString, isNumber, isNull } = require('./isType');
const stringConstants = require('../contants/stringConstants');

const generateRandomString = (
  length = 10,
  characters = stringConstants.CHARACTERS
) => {
  if (!isString(characters)) {
    return 'Error: Input must be a string';
  }

  if (!characters) {
    return 'Error: Characters cannot be empty';
  }

  if (
    !isNumber(length) ||
    isNull(length)
  ) {
    return 'Error: Input must be a number';
  }

  if (length <= 0) {
    return 'Error: Length must be a positive number';
  }

  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = generateRandomString;
