const { deepClone } = require('../src');

describe('deepClone', () => {
  test('should return the same value for primitive types', () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should create a deep clone of an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj).toEqual(obj);
    clonedObj.b.c = 3;
    expect(obj.b.c).toBe(2);
  });

  test('should create a deep clone of an array', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr).toEqual(arr);
    clonedArr[2].a = 4;
    expect(arr[2].a).toBe(3);
  });

  test('should handle circular references', () => {
    const obj = { a: 1 };
    obj.b = obj;
    const clonedObj = deepClone(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).toBe(clonedObj);
  });

  test('should clone special objects like Date and RegExp', () => {
    const date = new Date();
    const regex = /pattern/;
    const clonedDate = deepClone(date);
    const clonedRegex = deepClone(regex);
    expect(clonedDate).not.toBe(date);
    expect(clonedDate.getTime()).toBe(date.getTime());
    expect(clonedRegex).not.toBe(regex);
    expect(clonedRegex.source).toBe(regex.source);
    expect(clonedRegex.flags).toBe(regex.flags);
  });
});
