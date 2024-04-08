const memoize = require('../src/utils/memoize');

describe('memoize', () => {
  it('should return the cached result for the same function and arguments', () => {
    const mockFn1 = jest.fn(x => x * x);
    const mockFn2 = jest.fn((x, y) => x + y);
    const memoizedFn1 = memoize(mockFn1);
    const memoizedFn2 = memoize(mockFn2);

    const result1 = memoizedFn1(3);
    const result2 = memoizedFn1(3);
    const result3 = memoizedFn2(2, 3);
    const result4 = memoizedFn2(2, 3);

    expect(result1).toBe(9);
    expect(result2).toBe(9);
    expect(result3).toBe(5);
    expect(result4).toBe(5);
    expect(mockFn1).toHaveBeenCalledTimes(1);
    expect(mockFn2).toHaveBeenCalledTimes(1);
  });

  it('should call the original function for different arguments', () => {
    const mockFn1 = jest.fn(x => x * x);
    const mockFn2 = jest.fn((x, y) => x + y);
    const memoizedFn1 = memoize(mockFn1);
    const memoizedFn2 = memoize(mockFn2);

    const result1 = memoizedFn1(3);
    const result2 = memoizedFn1(4);
    const result3 = memoizedFn2(2, 3);
    const result4 = memoizedFn2(4, 5);

    expect(result1).toBe(9);
    expect(result2).toBe(16);
    expect(result3).toBe(5);
    expect(result4).toBe(9);
    expect(mockFn1).toHaveBeenCalledTimes(2);
    expect(mockFn2).toHaveBeenCalledTimes(2);
  });

  it('should handle different functions separately', () => {
    const mockFn1 = jest.fn(x => x * x);
    const mockFn2 = jest.fn((x, y) => x + y);
    const memoizedFn1 = memoize(mockFn1);
    const memoizedFn2 = memoize(mockFn2);

    const result1 = memoizedFn1(3);
    const result2 = memoizedFn2(2, 3);
    const result3 = memoizedFn1(3);
    const result4 = memoizedFn2(2, 3);

    expect(result1).toBe(9);
    expect(result2).toBe(5);
    expect(result3).toBe(9);
    expect(result4).toBe(5);
    expect(mockFn1).toHaveBeenCalledTimes(1);
    expect(mockFn2).toHaveBeenCalledTimes(1);
  });
});