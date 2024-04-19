const compareObject = require('./utils/compareObject');
const cloneObject = require('./utils/cloneObject');
const createKeyedStorage = require('./utils/createKeyedStorage');
const memoize = require('./utils/memoize');
const debounce = require('./utils/debounce');
const throttle = require('./utils/throttle');
const typeCheck = require('./utils/typeCheck');
const { delay } = require('./utils/promiseUtils');
const formatNumber = require('./utils/formatNumber');
const {
  toUpperCaseAndRemoveVietnamese,
  capitalizeFirstLetter,
} = require('./utils/string');
const generateRandomString = require('./utils/generateRandomString');
const deepEqual = require('./utils/deepEqual');

module.exports = {
  compareObject,
  cloneObject,
  createKeyedStorage,
  memoize,
  debounce,
  throttle,
  typeCheck,
  formatNumber,
  toUpperCaseAndRemoveVietnamese,
  generateRandomString,
  deepEqual,
  capitalizeFirstLetter,
};
