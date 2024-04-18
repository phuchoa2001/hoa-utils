const { toUpperCaseAndRemoveVietnamese } = require('../src/utils/string');
const typeValues = require('../contants/typeValues');

describe('toUpperCaseAndRemoveVietnamese', () => {
  test('should return uppercase string without Vietnamese characters for valid string input', () => {
    expect(toUpperCaseAndRemoveVietnamese('Xin chào, Việt Nam')).toBe(
      'XIN CHAO, VIET NAM'
    );
    expect(toUpperCaseAndRemoveVietnamese('Tôi đã học lập trình')).toBe(
      'TOI DA HOC LAP TRINH'
    );
    expect(toUpperCaseAndRemoveVietnamese('Ăn cơm ngon quá')).toBe(
      'AN COM NGON QUA'
    );
    expect(toUpperCaseAndRemoveVietnamese('Đẹp quá đi mất')).toBe(
      'DEP QUA DI MAT'
    );
    expect(toUpperCaseAndRemoveVietnamese('Uống nước đã')).toBe('UONG NUOC DA');
    expect(toUpperCaseAndRemoveVietnamese('Ơn giời cậu ấy đẹp trai quá')).toBe(
      'ON GIOI CAU AY DEP TRAI QUA'
    );
    expect(toUpperCaseAndRemoveVietnamese('Ăn cỗ bữa nay ngon lắm')).toBe(
      'AN CO BUA NAY NGON LAM'
    );
    expect(toUpperCaseAndRemoveVietnamese('Học hành đàng hoàng nhé')).toBe(
      'HOC HANH DANG HOANG NHE'
    );
  });

  test('should return the input number as a string for valid number input', () => {
    expect(toUpperCaseAndRemoveVietnamese(123)).toBe('123');
    expect(toUpperCaseAndRemoveVietnamese(3.14159)).toBe('3.14159');
  });

  test('should return "Invalid input: <type>" for invalid input types', () => {
    expect(toUpperCaseAndRemoveVietnamese(true)).toBe(
      `Invalid input: ${typeValues.boolean}`
    );
    expect(toUpperCaseAndRemoveVietnamese(null)).toBe(
      `Invalid input: ${typeValues.null}`
    );
    expect(toUpperCaseAndRemoveVietnamese({})).toBe(
      `Invalid input: ${typeValues.object}`
    );
    expect(toUpperCaseAndRemoveVietnamese([])).toBe(
      `Invalid input: ${typeValues.array}`
    );
    expect(toUpperCaseAndRemoveVietnamese(new Set())).toBe(
      `Invalid input: ${typeValues.set}`
    );
    expect(toUpperCaseAndRemoveVietnamese(new Map())).toBe(
      `Invalid input: ${typeValues.map}`
    );
    expect(toUpperCaseAndRemoveVietnamese(new Date())).toBe(
      `Invalid input: ${typeValues.date}`
    );
    expect(toUpperCaseAndRemoveVietnamese(/pattern/)).toBe(
      `Invalid input: ${typeValues.regexp}`
    );
    expect(toUpperCaseAndRemoveVietnamese(() => {})).toBe(
      `Invalid input: ${typeValues.function}`
    );
    expect(toUpperCaseAndRemoveVietnamese(Symbol('symbol'))).toBe(
      `Invalid input: ${typeValues.symbol}`
    );
    expect(toUpperCaseAndRemoveVietnamese(undefined)).toBe(
      `Invalid input: ${typeValues.undefined}`
    );
  });
});
