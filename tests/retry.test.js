const { retry } = require('../src');

const mockFunction = (shouldFail, failTimes) => {
  let callCount = 0;
  return () => {
    callCount++;
    if (shouldFail && callCount <= failTimes) {
      return Promise.reject('Error');
    }
    return Promise.resolve('Success');
  };
};

describe('retry function', () => {
  test('should succeed on first attempt', async () => {
    const fn = mockFunction(false, 0);
    await expect(retry(fn, 3)).resolves.toBe('Success');
  });

  test('should succeed after a few retries', async () => {
    const fn = mockFunction(true, 2);
    await expect(retry(fn, 3)).resolves.toBe('Success');
  });

  test('should fail after all retries are exhausted', async () => {
    const fn = mockFunction(true, 5);
    await expect(retry(fn, 3)).rejects.toBe('Error');
  });

  test('should not retry if retries is set to 1', async () => {
    const fn = mockFunction(true, 1);
    await expect(retry(fn, 1)).rejects.toBe('Error');
  });

  test('should throw error if fn is not a function', () => {
    expect(() => retry('not a function', 3)).toThrow('fn must be a function that returns a Promise');
  });

  test('should throw error if retries is not a number', () => {
    const fn = mockFunction(false, 0);
    expect(() => retry(fn, 'not a number')).toThrow('retries must be a number');
  });

  test('should handle async functions correctly', async () => {
    const asyncFunction = async () => {
      return 'Async Success';
    };
    await expect(retry(asyncFunction, 3)).resolves.toBe('Async Success');
  });
});
