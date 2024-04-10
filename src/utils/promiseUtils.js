const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const retry = (fn, retries) => {
  return fn().catch(err => {
    return (retries > 1 ? retry(fn, retries - 1) : Promise.reject(err));
  });
}

const retryWithDelay = (fn, retries, delay) => {
  return fn().catch(err => {
    return (retries > 1
      ? delay(delay).then(() => retryWithDelay(fn, retries - 1, delay))
      : Promise.reject(err)
    );
  });
}

module.exports = { delay, retry, retryWithDelay };