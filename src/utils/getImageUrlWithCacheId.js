const { isString } = require('./isType');

/**
 * Get the image URL with a new or current idCache
 * @param {string} imageUrl Original image URL
 * @param {string} cacheGroup Cache group (e.g., 'product(v1.0.0)')
 * @param {boolean} forceNewCacheId Force creating a new cacheId (optional, default: false)
 * @returns {string} Image URL with new or current idCache
 */
function getImageUrlWithCacheId(imageUrl, cacheGroup, forceNewCacheId = false) {
  if (!isString(imageUrl)) {
    throw new Error('imageUrl must be a string');
  }

  if (cacheGroup && !isString(cacheGroup)) {
    throw new Error('cacheGroup must be a string');
  }

  let cacheId;

  if (forceNewCacheId) {
    cacheId = Date.now().toString();
  } else if (cacheGroup) {
    cacheId = cacheGroup;
  }

  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}cacheId=${cacheId}`;
}

module.exports = getImageUrlWithCacheId;
