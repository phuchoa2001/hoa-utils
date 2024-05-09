const { truncateString } = require('../src');

describe('truncateString', () => {
  test('returns the original string if maxLength is 0', () => {
    const str = 'Hello, World!';
    const truncated = truncateString(str, 0);
    expect(truncated).toBe(str); // [1]
  });

  test('returns the original string if string length is less than or equal to maxLength', () => {
    const str = 'Hello';
    const truncated = truncateString(str, 10);
    expect(truncated).toBe(str); // [1]
  });

  test('truncates the string and adds ending when string length is greater than maxLength', () => {
    const str = 'Hello, World!';
    const truncated = truncateString(str, 5);
    expect(truncated).toBe('Hello...'); // [1]
  });

  test('returns error message if str is not a string', () => {
    const truncated = truncateString(123);
    expect(truncated).toBe('The str parameter must be a string'); // [2]
  });

  test('returns error message if maxLength is not a number', () => {
    const truncated = truncateString('Hello', 'abc');
    expect(truncated).toBe('The maxLength parameter must be a number'); // [2]
  });

  test('returns error message if ending is not a string', () => {
    const truncated = truncateString('Hello', 3, 123);
    expect(truncated).toBe('The ending parameter must be a string'); // [2]
  });

  test('uses custom ending string', () => {
    const str = 'Hello, World!';
    const truncated = truncateString(str, 5, '##');
    expect(truncated).toBe('Hello##'); // [1]
  });

  test('returns original string when string length is less than maxLength', () => {
    const str = 'Hello';
    const maxLength = 10;
    const truncated = truncateString(str, maxLength);
    expect(truncated).toBe(str); // [1]
  });
});
