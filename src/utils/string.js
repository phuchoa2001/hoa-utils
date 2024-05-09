const typeCheck = require('./typeCheck');
const typeValues = require('../contants/typeValues');
const { isString, isNumber } = require('./isType');

function toUpperCaseAndRemoveVietnamese(input) {
  const inputType = typeCheck(input);
  if (inputType === typeValues.number) {
    return input.toString();
  } else if (inputType === typeValues.string) {
    let str = input;
    var from =
        'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
      to =
        'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(RegExp(from[i], 'gi'), to[i]);
    }

    str = str.toUpperCase();
    return str;
  } else {
    return `Invalid input: ${typeValues[inputType]}`;
  }
}

const capitalizeFirstLetter = (str, restToLower = false) => {
  if (!isString(str)) {
    return 'Input must be a string';
  }

  const [firstChar = '', ...rest] = str;
  const capitalizedFirst = firstChar.toUpperCase();

  if (restToLower) {
    const lowercaseRest = rest.join('').toLowerCase();
    return `${capitalizedFirst}${lowercaseRest}`;
  }

  return `${capitalizedFirst}${rest.join('')}`;
};

/**
 * Truncates a string and adds a representative character at the end
 * @param {string} str - The string to be truncated
 * @param {number} [maxLength=0] - The maximum allowed length of the string
 * @param {string} [ending='...'] - The representative character for the truncated part
 * @returns {string} The truncated string
 */
function truncateString(str, maxLength = 0, ending = '...') {
  // Check if the str parameter is a string
  if (!isString(str)) {
    return 'The str parameter must be a string';
  }

  // Check if the maxLength parameter is a number
  if (!isNumber(maxLength)) {
    return 'The maxLength parameter must be a number';
  }

  // Check if the ending parameter is a string
  if (!isString(ending)) {
    return 'The ending parameter must be a string';
  }

  // If maxLength is 0 or the string is shorter than or equal to maxLength, return the original string
  if (maxLength === 0 || str.length <= maxLength) {
    return str;
  }

  // Truncate the string at the position maxLength - ending.length to make room for the representative character
  return str.slice(0, maxLength) + ending;
}

module.exports = {
  toUpperCaseAndRemoveVietnamese,
  capitalizeFirstLetter,
  truncateString,
};
