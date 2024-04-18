const isDataTypeSupported = require('../src/utils/isDataTypeSupported');

describe('isDataTypeSupported', () => {
  test('returns true for supported data types', () => {
    expect(isDataTypeSupported(undefined)).toBe(true); // [1]
    expect(isDataTypeSupported(true)).toBe(true); // [2]
    expect(isDataTypeSupported(42)).toBe(true); // [3]
    expect(isDataTypeSupported('hello')).toBe(true); // [4]
    expect(isDataTypeSupported(null)).toBe(true); // [5]
    expect(isDataTypeSupported({})).toBe(true); // [6]
    expect(isDataTypeSupported([])).toBe(true); // [7]
    expect(isDataTypeSupported(new Set())).toBe(true); // [8]
    expect(isDataTypeSupported(new Map())).toBe(true); // [9]
    expect(isDataTypeSupported(new Date())).toBe(true); // [10]
    expect(isDataTypeSupported(/pattern/)).toBe(true); // [11]
    expect(isDataTypeSupported(() => {})).toBe(true); // [12]
    expect(isDataTypeSupported(Symbol('foo'))).toBe(true); // [13]
  });

  test('returns false for unsupported data types', () => {
    expect(isDataTypeSupported(new WeakSet())).toBe(false);
    expect(isDataTypeSupported(new WeakMap())).toBe(false);
    expect(isDataTypeSupported(new Promise(() => {}))).toBe(false);
  });
});
