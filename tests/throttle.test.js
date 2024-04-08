const throttle = require('../src/utils/throttle');

describe('throttle', () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 100);
    jest.useFakeTimers();
  });

  it('should call the function immediately', () => {
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should throttle multiple calls', () => {
    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should call the function with correct arguments', () => {
    const arg1 = 'hello';
    const arg2 = 123;

    throttledFunc(arg1, arg2);
    expect(func).toHaveBeenCalledWith(arg1, arg2);
  });

  it('should reset the timer after the delay', () => {
    throttledFunc();
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });
});