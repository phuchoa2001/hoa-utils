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

module.exports = { toUpperCaseAndRemoveVietnamese };
