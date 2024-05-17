const { isNumber, isFunction } = require('./isType');

const delayFn = (ms) => {
  if (!isNumber(ms)) {
    throw new Error('ms must be a number');
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const retry = (fn, retries) => {
  if (!isFunction(fn)) {
    throw new Error('fn must be a function that returns a Promise');
  }
  if (!isNumber(retries)) {
    throw new Error('retries must be a number');
  }

  return fn().catch((err) => {
    return retries > 1 ? retry(fn, retries - 1) : Promise.reject(err);
  });
};

const retryWithDelay = (fn, retries, delay) => {

  if (!isFunction(fn)) {
    throw new Error('fn must be a function that returns a Promise');
  }
  if (!isNumber(retries)) {
    throw new Error('retries must be a number');
  }

  if (!isNumber(delay)) {
    throw new Error('delay must be a number');
  }

  return fn().catch((err) => {
    return retries > 1
      ? delayFn(delay).then(() => retryWithDelay(fn, retries - 1, delay))
      : Promise.reject(err);
  });
};

module.exports = { delay: delayFn, retry, retryWithDelay };
