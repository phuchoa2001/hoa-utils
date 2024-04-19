const deepEqual = require('../src/utils/deepEqual');

describe('deepEqual Function', () => {
  test('should return true for null compared with null', () => {
    expect(deepEqual(null, null)).toBe(true);
  });

  test('should return false for null compared with undefined', () => {
    expect(deepEqual(null, undefined)).toBe(false);
  });

  test('should return true for identical strings', () => {
    expect(deepEqual('hi', 'hi')).toBe(true);
  });

  test('should return true for identical numbers', () => {
    expect(deepEqual(5, 5)).toBe(true);
  });

  test('should return false for different numbers', () => {
    expect(deepEqual(5, 10)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    expect(deepEqual([], [])).toBe(true);
    expect(deepEqual([1, 2], [1, 2])).toBe(true);
  });

  test('should return false for arrays with different orders', () => {
    expect(deepEqual([1, 2], [2, 1])).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
  });
  test('should return true for identical objects', () => {
    expect(deepEqual({}, {})).toBe(true);
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
  });

  test('should return false for objects with different values', () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });

  test('should return true for nested objects with the same structure and values', () => {
    const obj1 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    const obj2 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return true for nested objects with the same structure and values', () => {
    const obj1 = {
      1: { name: 'mhc', age: 28 },
      2: {
        name: 'arb',
        obj: {
          a: 'b',
        },
      },
    };
    const obj2 = {
      1: { name: 'mhc', age: 28 },
      2: {
        name: 'arb',
        obj: {
          a: 'b',
        },
      },
    };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for nested objects with different values', () => {
    const obj1 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    const obj2 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 27 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test('should return true for objects with identical structure and values', () => {
    const objectA = {
      name: 'Alice',
      age: 25,
      hobbies: ['reading', 'cycling'],
    };

    const objectB = {
      name: 'Alice',
      age: 25,
      hobbies: ['reading', 'cycling'],
    };

    const result = deepEqual(objectA, objectB);
    expect(result).toBe(true);
  });
});
