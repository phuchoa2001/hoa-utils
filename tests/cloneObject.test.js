const { cloneObject } = require('../src');

describe('cloneObject Function', () => {
  test('should clone a simple object', () => {
    const obj = { name: 'John', age: 30 };
    const clonedObj = cloneObject(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should clone a nested object', () => {
    const obj = {
      name: 'John',
      address: {
        city: 'New York',
        country: 'USA',
      },
    };
    const clonedObj = cloneObject(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.address).not.toBe(obj.address);
  });

  test('should handle null values', () => {
    const obj = { name: null };
    const clonedObj = cloneObject(obj);
    expect(clonedObj).toEqual(obj);
  });

  test('should clone an object containing a function', () => {
    const obj = {
      name: 'John',
      greet: function () {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
    const clonedObj = cloneObject(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.greet).toEqual(obj.greet);
    expect(clonedObj).not.toBe(obj);
  });

  test('should clone a deeply nested object', () => {
    const obj = {
      level1: {
        level2: {
          level3: {
            name: 'John',
          },
        },
      },
    };
    const clonedObj = cloneObject(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.level1).not.toBe(obj.level1);
    expect(clonedObj.level1.level2).not.toBe(obj.level1.level2);
    expect(clonedObj.level1.level2.level3).not.toBe(obj.level1.level2.level3);
  });
});
