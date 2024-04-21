const cloneDeep = require('lodash/cloneDeep');

/**
 * Tạo một bản sao sâu của đối tượng hoặc giá trị đã cho.
 *
 * @param {*} value - Đối tượng hoặc giá trị cần sao chép sâu.
 * @returns {*} Bản sao sâu của đối tượng hoặc giá trị đã cho.
 */
function createDeepClone(value) {
  return cloneDeep(value);
}

module.exports = createDeepClone;
