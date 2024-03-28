const createKeyedStorage = (key) => {
  // Sử dụng closure để lưu trữ key
  const storageKey = `__${key}__`;

  // Tạo các hàm để truy cập local storage với key riêng
  const getItem = (itemKey) => {
    const value = localStorage.getItem(`${storageKey}:${itemKey}`);
    return value ? value : null;
  };

  const setItem = (itemKey, value) => {
    localStorage.setItem(`${storageKey}:${itemKey}`, value);
  };

  // Hàm kiểm tra và parse JSON nếu có thể
  const getItemParsed = (itemKey) => {
    const value = getItem(itemKey);
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  };

  // Hàm set item với JSON.stringify nếu là object
  const setItemJSON = (itemKey, value) => {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
    setItem(itemKey, valueToStore);
  };

  const removeItem = (itemKey) => {
    localStorage.removeItem(`${storageKey}:${itemKey}`);
  };

  // Hàm xóa tất cả các key có cùng tiền tố storageKey
  const clearMatchingKeys = () => {
    const keyPrefix = `${storageKey}:`;
    const isMockStorage = typeof localStorage.length === 'function';
    const keys = isMockStorage ? localStorage.getKeys() : Object.keys(localStorage);

    for (const key of keys) {
      if (key.startsWith(keyPrefix)) {
        localStorage.removeItem(key);
      }
    }
  };

  // Trả về các hàm để sử dụng
  return { getItem, setItem, removeItem, clearMatchingKeys , getItemParsed , setItemJSON };
};

module.exports = createKeyedStorage;