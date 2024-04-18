function typeCheck(value) {
  const return_value = Object.prototype.toString.call(value);
  const type = return_value.substring(
    return_value.indexOf(' ') + 1,
    return_value.indexOf(']')
  );

  return type.toLowerCase();
}

module.exports = typeCheck;
