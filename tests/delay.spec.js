const { delay } = require('../src/utils/promiseUtils');

describe('delay function', () => {
  jest.setTimeout(10000); // Tăng thời gian timeout của jest nếu cần

  test('should resolve after the specified delay', async () => {
    const startTime = Date.now();
    await delay(100);
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(100);
    expect(endTime - startTime).toBeLessThan(200);
  });

  test('should return a Promise', () => {
    const result = delay(100);
    expect(result).toBeInstanceOf(Promise);
  });

  test('should resolve without value', async () => {
    const result = await delay(100);
    expect(result).toBeUndefined();
  });

  test('should throw error if delay is not a number', () => {
    expect(() => delay('not a number')).toThrowError('ms must be a number');
  });

  test('should throw error if delay is null', () => {
    expect(() => delay(null)).toThrowError('ms must be a number');
  });

  test('should throw error if delay is undefined', () => {
    expect(() => delay(undefined)).toThrowError('ms must be a number');
  });

  test('should throw error if delay is an object', () => {
    expect(() => delay({})).toThrowError('ms must be a number');
  });

  test('should throw error if delay is an array', () => {
    expect(() => delay([])).toThrowError('ms must be a number');
  });
});
