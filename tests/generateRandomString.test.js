const { generateRandomString } = require('../src');

describe('generateRandomString', () => {
  test('should return a random string with the specified length', () => {
    const length = 10;
    const randomString = generateRandomString(length);
    expect(randomString).toHaveLength(length);
    expect(typeof randomString).toBe('string');
  });

  test('should return a random string with default length of 10', () => {
    const randomString = generateRandomString();
    expect(randomString).toHaveLength(10);
    expect(typeof randomString).toBe('string');
  });

  test('should return an error message when input is not a number', () => {
    const invalidInput = 'hello';
    const errorMessage = generateRandomString(invalidInput);
    expect(errorMessage).toBe('Error: Input must be a number');
  });

  test('should return an error message when input is an array', () => {
    const invalidInput = [1, 2, 3];
    const errorMessage = generateRandomString(invalidInput);
    expect(errorMessage).toBe('Error: Input must be a number');
  });

  test('should return an error message when input is an object', () => {
    const invalidInput = { length: 5 };
    const errorMessage = generateRandomString(invalidInput);
    expect(errorMessage).toBe('Error: Input must be a number');
  });

  test('should return an error message when input is a boolean', () => {
    const invalidInput = true;
    const errorMessage = generateRandomString(invalidInput);
    expect(errorMessage).toBe('Error: Input must be a number');
  });

  test('should return an error message when input is null', () => {
    const invalidInput = null;
    const errorMessage = generateRandomString(invalidInput);
    expect(errorMessage).toBe('Error: Input must be a number');
  });

  test('should return an error message when input is undefined', () => {
    const invalidInput = undefined;
    const randomString = generateRandomString(invalidInput);
    expect(randomString).toHaveLength(10);
    expect(typeof randomString).toBe('string');
  });

  test('should return a random string with characters from the specified set', () => {
    const characters = 'abc';
    const randomString = generateRandomString(5, characters);
    expect(randomString).toHaveLength(5);
    expect(/^[abc]+$/.test(randomString)).toBe(true);
  });

  test('should return an error message when characters is not a string', () => {
    const invalidCharacters = 123;
    const errorMessage = generateRandomString(5, invalidCharacters);
    expect(errorMessage).toBe('Error: Input must be a string');
  });

  test('should return an error message when characters is an empty string', () => {
    const emptyCharacters = '';
    const errorMessage = generateRandomString(5, emptyCharacters);
    expect(errorMessage).toBe('Error: Characters cannot be empty');
  });
  test('should return an error message when input is a negative number', () => {
    const negativeInput = -5;
    const errorMessage = generateRandomString(negativeInput);
    expect(errorMessage).toBe('Error: Length must be a positive number');
  });

  test('should return an error message when input is zero', () => {
    const zeroInput = 0;
    const errorMessage = generateRandomString(zeroInput);
    expect(errorMessage).toBe('Error: Length must be a positive number');
  });
});
