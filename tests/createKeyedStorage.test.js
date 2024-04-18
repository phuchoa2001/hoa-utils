const createKeyedStorage = require('../src/utils/createKeyedStorage');
const createMockLocalStorage = require('../__mocks__/localStorage');

describe('createKeyedStorage', () => {
  let myWebsiteStorage;
  let mockLocalStorage;

  beforeEach(() => {
    mockLocalStorage = createMockLocalStorage();

    // Kiểm tra xem localStorage đã được định nghĩa hay chưa
    if (!global.localStorage) {
      // Nếu chưa, định nghĩa localStorage mới
      Object.defineProperty(global, 'localStorage', {
        value: mockLocalStorage,
        configurable: true, // Cho phép ghi đè giá trị
      });
    } else {
      // Nếu đã được định nghĩa, ghi đè giá trị hiện tại
      global.localStorage = mockLocalStorage;
    }

    myWebsiteStorage = createKeyedStorage('myWebsite');
  });

  afterEach(() => {
    mockLocalStorage = null;
    delete global.localStorage;
  });

  it('should set and get items correctly', () => {
    const userData = { name: 'John', age: 30 };
    myWebsiteStorage.setItemJSON('user', userData);
    const retrievedData = myWebsiteStorage.getItemParsed('user');
    expect(retrievedData).toEqual(userData);
  });

  it('should remove items correctly', () => {
    myWebsiteStorage.setItemJSON('user', { name: 'John', age: 30 });
    myWebsiteStorage.removeItem('user');
    const retrievedData = myWebsiteStorage.getItemParsed('user');
    expect(retrievedData).toBeNull();
  });

  it('should clear matching keys correctly', () => {
    myWebsiteStorage.setItemJSON('user', { name: 'John', age: 30 });
    myWebsiteStorage.setItemJSON('settings', { theme: 'dark' });
    myWebsiteStorage.clearMatchingKeys();
    const user = myWebsiteStorage.getItemParsed('user');
    const settings = myWebsiteStorage.getItemParsed('settings');
    expect(user).toBeNull();
    expect(settings).toBeNull();
  });

  it('should get key by index', () => {
    myWebsiteStorage.setItemJSON('user', { name: 'John', age: 30 });
    myWebsiteStorage.setItemJSON('settings', { theme: 'dark' });

    const firstKey = mockLocalStorage.key(0);
    const secondKey = mockLocalStorage.key(1);

    expect(firstKey).toBe('__myWebsite__:user');
    expect(secondKey).toBe('__myWebsite__:settings');
  });

  it('should set and get string items correctly', () => {
    const stringData = 'Hello, World!';
    myWebsiteStorage.setItem('message', stringData);
    const retrievedData = myWebsiteStorage.getItem('message');
    expect(retrievedData).toBe(stringData);
  });

  it('should return null for non-existent key', () => {
    const retrievedData = myWebsiteStorage.getItem('nonExistentKey');
    expect(retrievedData).toBeNull();
  });
});
