const { formatNumber } = require('../src');

describe('formatNumber', () => {
  test('should return the number as a string if it is less than 1000', () => {
    expect(formatNumber(999)).toBe('999');
  });

  test('should format the number with the "K" unit', () => {
    expect(formatNumber(1234)).toBe('1.23K');
    expect(formatNumber(999000)).toBe('999K');
  });

  test('should format the number with the "M" unit', () => {
    expect(formatNumber(1234567)).toBe('1.23M');
    expect(formatNumber(999000000)).toBe('999M');
  });

  test('should format the number with the "B" unit', () => {
    expect(formatNumber(1234567890)).toBe('1.23B');
    expect(formatNumber(999000000000)).toBe('999B');
  });

  test('should format the number with the "T" unit', () => {
    expect(formatNumber(1234567890123)).toBe('1.23T');
    expect(formatNumber(999000000000000)).toBe('999T');
  });

  test('should format the number with the "Q" unit', () => {
    expect(formatNumber(1234567890123456)).toBe('1.23Q');
    expect(formatNumber(999000000000000000)).toBe('999Q');
  });

  test('should format the number with the "Qn" unit', () => {
    expect(formatNumber(1234567890123456789)).toBe('1.23Qn');
    expect(formatNumber(999000000000000000000)).toBe('999Qn');
  });

  test('should format the number with the "Sx" unit', () => {
    expect(formatNumber(1234567890123456789012)).toBe('1.23Sx');
    expect(formatNumber(999000000000000000000000)).toBe('999Sx');
  });

  test('should format the number with the "Sp" unit', () => {
    expect(formatNumber(1234567890123456789012345)).toBe('1.23Sp');
    expect(formatNumber(999000000000000000000000000)).toBe('999Sp');
  });

  test('should format the number with the "O" unit', () => {
    expect(formatNumber(1234567890123456789012345678)).toBe('1.23O');
    expect(formatNumber(999000000000000000000000000000)).toBe('999O');
  });

  test('should format the number with the "N" unit', () => {
    expect(formatNumber(1234567890123456789012345678901)).toBe('1.23N');
    expect(formatNumber(999000000000000000000000000000000)).toBe('999N');
  });

  test('should handle negative numbers', () => {
    expect(formatNumber(-1234)).toBe('-1.23K');
    expect(formatNumber(-12345678)).toBe('-12.35M');
    expect(formatNumber(-5000000000)).toBe('-5B');
  });

  test('should handle zero', () => {
    expect(formatNumber(0)).toBe('0');
  });

  test('should return "0" if input is not a number', () => {
    expect(formatNumber('abc')).toBe('0');
    expect(formatNumber(null)).toBe('0');
    expect(formatNumber(undefined)).toBe('0');
    expect(formatNumber({})).toBe('0');
  });
});
