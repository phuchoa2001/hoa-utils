const { getImageUrlWithCacheId } = require('../src');

describe('getImageUrlWithCacheId', () => {
  test('should return image URL with current cacheId', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const result = getImageUrlWithCacheId(imageUrl);
    expect(result).toMatch(`${imageUrl}?cacheId=`);
  });

  test('should return image URL with sidebar cache version', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const nameBarCacheVersion = 'v1.0.0';
    const result = getImageUrlWithCacheId(imageUrl, nameBarCacheVersion);
    expect(result).toBe(`${imageUrl}?cacheId=${nameBarCacheVersion}`);
  });

  test('should return image URL with new cacheId when forceNewCacheId is true', () => {
    const imageUrl = 'https://example.com/image.jpg?size=large';
    const nameBarCacheVersion = 'v2.1.0';
    const forceNewCacheId = true;
    const result = getImageUrlWithCacheId(
      imageUrl,
      nameBarCacheVersion,
      forceNewCacheId
    );
    expect(result).toMatch(`${imageUrl}&cacheId=`);
  });

  test('should throw error when imageUrl is not a string', () => {
    expect(() => getImageUrlWithCacheId(123, 'v1.0.0')).toThrowError(
      'imageUrl must be a string'
    );
  });

  test('should throw error when nameBarCacheVersion is not a string', () => {
    expect(() =>
      getImageUrlWithCacheId('https://example.com/image.jpg', 123)
    ).toThrowError('cacheGroup must be a string');
  });
});
