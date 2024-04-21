const object = require('./utils/group/object');
const func = require('./utils/group/function');
const string = require('./utils/group/string');
const other = require('./utils/group/other');
const isType = require('./utils/group/isType');

module.exports = {
  ...object,
  ...func,
  ...string,
  ...other,
  ...isType,
};
