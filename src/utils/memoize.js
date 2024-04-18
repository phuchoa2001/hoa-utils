function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    const fnKey = fn.toString(); // Sử dụng chuỗi biểu diễn hàm làm khóa

    if (!cache.has(fnKey)) {
      cache.set(fnKey, new Map());
    }

    const fnCache = cache.get(fnKey);
    const key = JSON.stringify(args);

    if (fnCache.has(key)) {
      return fnCache.get(key);
    }

    const result = fn(...args);
    fnCache.set(key, result);
    return result;
  };
}

module.exports = memoize;
