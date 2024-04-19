const { typeCheck } = require('../src');

describe('typeCheck', () => {
  test('returns correct type for primitive values', () => {
    expect(typeCheck(null)).toBe('null');
    [1];
    expect(typeCheck(undefined)).toBe('undefined');
    [2];
    expect(typeCheck(true)).toBe('boolean');
    [3];
    expect(typeCheck(42)).toBe('number');
    [4];
    expect(typeCheck('hello')).toBe('string');
    [5];
    expect(typeCheck(Symbol('foo'))).toBe('symbol');
    [6];
  });

  test('returns correct type for non-primitive values', () => {
    expect(typeCheck([])).toBe('array');
    [7];
    expect(typeCheck({})).toBe('object');
    [8];
    expect(typeCheck(/pattern/)).toBe('regexp');
    [9];
    expect(typeCheck(new Date())).toBe('date');
    [10];

    const func = () => {};
    expect(typeCheck(func)).toBe('function');
    [11];

    expect(typeCheck(new Set())).toBe('set');
    [12];
    expect(typeCheck(new Map())).toBe('map');
    [13];
  });

  test('returns correct type for JSON values', () => {
    const jsonString = '{"name": "John", "age": 30}';
    const jsonObject = JSON.parse(jsonString);

    expect(typeCheck(jsonString)).toBe('string');
    [14];
    expect(typeCheck(jsonObject)).toBe('object');
    [15];
  });
});
