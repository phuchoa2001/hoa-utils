const { deepEqual } = require('../src');

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

  test('should handle NaN values', () => {
    expect(deepEqual(NaN, NaN)).toBe(true);
    expect(deepEqual(NaN, 0)).toBe(false);
  });

  test('should handle positive and negative zero', () => {
    expect(deepEqual(+0, -0)).toBe(true);
    expect(deepEqual(+0, +0)).toBe(true);
    expect(deepEqual(-0, -0)).toBe(true);
  });

  test('should handle Date objects', () => {
    const date1 = new Date('2023-04-21T10:00:00Z');
    const date2 = new Date('2023-04-21T10:00:00Z');
    const date3 = new Date('2023-04-22T10:00:00Z');
    expect(deepEqual(date1, date2)).toBe(true);
    expect(deepEqual(date1, date3)).toBe(false);
  });

  test('should handle RegExp objects', () => {
    const regex1 = /pattern/gi;
    const regex2 = /pattern/gi;
    const regex3 = /pattern/g;
    expect(deepEqual(regex1, regex2)).toBe(true);
    expect(deepEqual(regex1, regex3)).toBe(false);
  });

  test('should handle Maps and Sets', () => {
    const map1 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const map2 = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    const map3 = new Map([
      ['a', 1],
      ['b', 3],
    ]);
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([1, 2, 3]);
    const set3 = new Set([1, 2, 4]);
    expect(deepEqual(map1, map2)).toBe(true);
    expect(deepEqual(map1, map3)).toBe(false);
    expect(deepEqual(set1, set2)).toBe(true);
    expect(deepEqual(set1, set3)).toBe(false);
  });

  test('should handle circular references', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    obj1.b = obj1;
    obj2.b = obj2;
    expect(deepEqual(obj1, obj2)).toBe(true);
  });
});
