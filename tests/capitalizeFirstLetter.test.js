const { capitalizeFirstLetter } = require('../src/utils/string');

describe('capitalizeFirstLetter', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  test('capitalizes the first letter and converts the rest to lowercase when restToLower is true', () => {
    expect(capitalizeFirstLetter('HELLO', true)).toBe('Hello');
    expect(capitalizeFirstLetter('wORLD', true)).toBe('World');
  });

  test('handles empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  test('handles single character string', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
    expect(capitalizeFirstLetter('A')).toBe('A');
  });

  test('handles strings with multiple words', () => {
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
    expect(capitalizeFirstLetter('hello world', true)).toBe('Hello world');
  });
  
  test('returns "Input must be a string" when input is not a string', () => {
    expect(capitalizeFirstLetter(123)).toBe('Input must be a string');
    expect(capitalizeFirstLetter(true)).toBe('Input must be a string');
    expect(capitalizeFirstLetter({})).toBe('Input must be a string');
    expect(capitalizeFirstLetter(null)).toBe('Input must be a string');
    expect(capitalizeFirstLetter(undefined)).toBe('Input must be a string');
  });
});