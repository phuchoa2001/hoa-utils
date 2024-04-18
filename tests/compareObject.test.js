const compareObject = require('../src/utils/compareObject');

describe('compareObject Function', () => {
  test('should return true for null compared with null', () => {
    expect(compareObject(null, null)).toBe(true);
  });

  test('should return false for null compared with undefined', () => {
    expect(compareObject(null, undefined)).toBe(false);
  });

  test('should return true for identical strings', () => {
    expect(compareObject('hi', 'hi')).toBe(true);
  });

  test('should return true for identical numbers', () => {
    expect(compareObject(5, 5)).toBe(true);
  });

  test('should return false for different numbers', () => {
    expect(compareObject(5, 10)).toBe(false);
  });

  test('should return true for identical arrays', () => {
    expect(compareObject([], [])).toBe(true);
    expect(compareObject([1, 2], [1, 2])).toBe(true);
  });

  test('should return false for arrays with different orders', () => {
    expect(compareObject([1, 2], [2, 1])).toBe(false);
  });

  test('should return false for arrays with different lengths', () => {
    expect(compareObject([1, 2], [1, 2, 3])).toBe(false);
  });

  test('should return true for identical objects', () => {
    expect(compareObject({}, {})).toBe(true);
    expect(compareObject({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(compareObject({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
  });

  test('should return false for objects with different values', () => {
    expect(compareObject({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });

  test('should return true for nested objects with the same structure and values', () => {
    const obj1 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    const obj2 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    expect(compareObject(obj1, obj2)).toBe(true);
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
    expect(compareObject(obj1, obj2)).toBe(true);
  });

  test('should return false for nested objects with different values', () => {
    const obj1 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 26 } };
    const obj2 = { 1: { name: 'mhc', age: 28 }, 2: { name: 'arb', age: 27 } };
    expect(compareObject(obj1, obj2)).toBe(false);
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

    const result = compareObject(objectA, objectB);
    expect(result).toBe(true);
  });
});
