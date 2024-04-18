const debounce = require('../src/utils/debounce');

describe('debounce', () => {
  let func;
  let debouncedFunc;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 100);
    jest.useFakeTimers();
  });

  it('should call the function after the delay', () => {
    debouncedFunc();
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(100); // Tua nhanh thời gian 100ms

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should debounce multiple calls', () => {
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should call the function with correct arguments', () => {
    const arg1 = 'hello';
    const arg2 = 123;

    debouncedFunc(arg1, arg2);
    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(arg1, arg2);
  });

  it('should cancel the previous timeout', () => {
    debouncedFunc();
    jest.advanceTimersByTime(50);
    debouncedFunc();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
