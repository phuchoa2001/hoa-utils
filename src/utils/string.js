const typeCheck = require('./typeCheck');
const typeValues = require('../contants/typeValues');

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
  if (typeCheck(str) !== typeValues.string) {
    return 'Input must be a string';
  }

  const [firstChar = "", ...rest] = str;
  const capitalizedFirst = firstChar.toUpperCase();

  if (restToLower) {
    const lowercaseRest = rest.join('').toLowerCase();
    return `${capitalizedFirst}${lowercaseRest}`;
  }

  return `${capitalizedFirst}${rest.join('')}`;
};

module.exports = { toUpperCaseAndRemoveVietnamese, capitalizeFirstLetter };
