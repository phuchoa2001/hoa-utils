const { retryWithDelay } = require('../src');

// Mock function to simulate success and failure
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

describe('retryWithDelay function', () => {
  jest.setTimeout(10000); // Tăng thời gian timeout của jest nếu cần

  test('should succeed on first attempt', async () => {
    const fn = mockFunction(false, 0);
    const startTime = Date.now();
    await expect(retryWithDelay(fn, 3, 100)).resolves.toBe('Success');
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(200); // Kiểm tra thời gian thực thi
  });

  test('should succeed after a few retries', async () => {
    const fn = mockFunction(true, 2);
    const startTime = Date.now();
    await expect(retryWithDelay(fn, 3, 100)).resolves.toBe('Success');
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(200); // Kiểm tra thời gian thực thi
    expect(endTime - startTime).toBeLessThan(500); // Kiểm tra thời gian thực thi
  });

  test('should fail after all retries are exhausted', async () => {
    const fn = mockFunction(true, 5);
    const startTime = Date.now();
    await expect(retryWithDelay(fn, 3, 100)).rejects.toBe('Error');
    const endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(200); // Kiểm tra thời gian thực thi
    expect(endTime - startTime).toBeLessThan(500); // Kiểm tra thời gian thực thi
  });

  test('should not retry if retries is set to 1', async () => {
    const fn = mockFunction(true, 1);
    const startTime = Date.now();
    await expect(retryWithDelay(fn, 1, 100)).rejects.toBe('Error');
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(200); // Kiểm tra thời gian thực thi
  });

  test('should handle async functions correctly', async () => {
    const asyncFunction = async () => {
      return 'Async Success';
    };
    const startTime = Date.now();
    await expect(retryWithDelay(asyncFunction, 3, 100)).resolves.toBe('Async Success');
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(200); // Kiểm tra thời gian thực thi
  });

  test('should throw error if fn is not a function', () => {
    expect(() => retryWithDelay('not a function', 3, 100)).toThrow(Error);
  });

  test('should throw error if retries is not a number', () => {
    const fn = mockFunction(false, 0);
    expect(() => retryWithDelay(fn, 'not a number', 100)).toThrow(Error);
  });

  test('should throw error if delay is not a number', () => {
    const fn = mockFunction(false, 0);
    expect(() => retryWithDelay(fn, 3, 'not a number')).toThrow(Error);
  });
});
