const { validatePhoneVN, infoPhone } = require('../src/utils/validatePhoneVN');

describe('Vietnamese Phone Number Validation', () => {
  // Viettel
  test.each([
    '0321234567',
    '0331234567',
    '0341234567',
    '0351234567',
    '0361234567',
    '0371234567',
    '0381234567',
    '0391234567',
    '0861234567',
    '0961234567',
    '0971234567',
    '0981234567',
  ])('validates Viettel number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
    expect(infoPhone(number).network).toBe('Viettel');
  });

  // Mobifone
  test.each([
    '0701234567',
    '0761234567',
    '0771234567',
    '0781234567',
    '0791234567',
    '0891234567',
    '0901234567',
    '0931234567',
  ])('validates Mobifone number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
    expect(infoPhone(number).network).toBe('Mobifone');
  });

  // Vinaphone
  test.each([
    '0811234567',
    '0821234567',
    '0831234567',
    '0841234567',
    '0851234567',
    '0881234567',
    '0911234567',
    '0941234567',
  ])('validates Vinaphone number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
    expect(infoPhone(number).network).toBe('Vinaphone');
  });

  // Vietnamobile
  test.each([
    '0521234567',
    '0561234567',
    '0581234567',
    '0921234567',
  ])('validates Vietnamobile number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
    expect(infoPhone(number).network).toBe('Vietnamobile');
  });

  // Gmobile
  test.each([
    '0591234567',
    '0991234567',
  ])('validates Gmobile number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
    expect(infoPhone(number).network).toBe('Gmobile');
  });

  // Itelecom
  test('validates Itelecom number 0871234567', () => {
    expect(validatePhoneVN('0871234567')).toBeTruthy();
    expect(infoPhone('0871234567').network).toBe('Itelecom');
  });

  // Invalid numbers
  test.each([
    '0123456789', // Invalid prefix
    '1234567890', // No leading zero
    'abcdefghij', // Non-numeric characters
    '+840981234567', // Valid international format but incorrect length
  ])('invalidates incorrect number %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Valid international format
  test.each([
    '+84321234567',
    '0084321234567',
  ])('validates international format number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
  });

  // Fixed-line phone numbers (invalid for these functions)
  test.each([
    '0281234567', // TP. Hồ Chí Minh
  ])('invalidates fixed-line number %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Test cases for invalid prefixes (001 to 031)
  test.each([
    '0011234567',
    '0201234567',
    '0311234567',
  ])('invalidates incorrect prefix %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Test cases for invalid length
  test.each([
    '092123456', // Too short
    '09212345678', // Too long
  ])('invalidates incorrect length %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Test cases for international numbers (should be invalid for this function)
  test.each([
    '+12025550123', // US number
    '+442071838750', // UK number
  ])('invalidates international number %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Test cases for non-numeric characters
  test.each([
    '03212345a7',
    '032123456b',
  ])('invalidates non-numeric characters %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

  // Test cases for valid international format for Vietnamese numbers
  test.each([
    '+84321234567',
    '0084321234567',
  ])('validates international format number %s', (number) => {
    expect(validatePhoneVN(number)).toBeTruthy();
  });

  // Test cases for fixed-line numbers (should be invalid for this function)
  test.each([
    '0241234567', // Hanoi
    '0281234567', // Ho Chi Minh City
  ])('invalidates fixed-line number %s', (number) => {
    expect(validatePhoneVN(number)).toBeFalsy();
  });

});
