const createMockLocalStorage = () => {
  let store = {};

  const key = (index) => {
    const keys = Object.keys(store);
    return keys[index] || null;
  };

  const getKeys = () => {
    return Object.keys(store);;
  }

  const length = () => Object.keys(store).length;

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: (key) => delete store[key],
    clear: () => (store = {}),
    key,
    length,
    getKeys
  };
};

module.exports = createMockLocalStorage;