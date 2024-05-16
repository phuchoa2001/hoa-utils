/**
 * Validates a Vietnamese phone number.
 * Uses Regular Expression to determine the valid format.
 * 
 * @param {string} phoneNumber - The phone number to be validated.
 * @returns {boolean} - Returns true if the phone number is valid, otherwise false.
 */
function validatePhoneVN(phoneNumber) {
  var regex = /^(0?3[2-9]|0?5[2|6|8|9]|0?7[0|6-9]|0?8[1-9]|0?9[0-4|6-9]|(\+84|84|0084)3[2-9]|(\+84|84|0084)5[2|6|8|9]|(\+84|84|0084)7[0|6-9]|(\+84|84|0084)8[1-9]|(\+84|84|0084)9[0-4|6-9])[0-9]{7}$/;
  return regex.test(phoneNumber);
}

/**
 * Provides detailed information about a phone number.
 * Includes identifying the carrier network and checking the validity of the phone number.
 * 
 * @param {string} phoneNumber - The phone number for which to retrieve information.
 * @returns {object} - An object containing information about the validity, carrier network, and the phone number itself.
 */
function infoPhone(phoneNumber) {
  var info = {
    valid: validatePhoneVN(phoneNumber),
    network: null,
    number: phoneNumber
  };

  if (info.valid) {
    var networkPatterns = {
      'Viettel': /^(0?3[2-9]|(\+84|84|0084)3[2-9]|086|096|097|098|(\+84|84|0084)86|(\+84|84|0084)96|(\+84|84|0084)97|(\+84|84|0084)98)[0-9]{7}$/,
      'Mobifone': /^(0?7[0|6-9]|(\+84|84|0084)7[0|6-9]|089|090|093|(\+84|84|0084)89|(\+84|84|0084)90|(\+84|84|0084)93)[0-9]{7}$/,
      'Vinaphone': /^(0?8[1-6|8-9]|(\+84|84|0084)8[1-6|8-9]|088|091|094|(\+84|84|0084)88|(\+84|84|0084)91|(\+84|84|0084)94)[0-9]{7}$/,
      'Vietnamobile': /^(0?5[268]|(\+84|84|0084)5[268]|092|(\+84|84|0084)92)[0-9]{7}$/,
      'Gmobile': /^(0?59|(\+84|84|0084)59|099|(\+84|84|0084)99)[0-9]{7}$/,
      'Itelecom': /^(0?87|(\+84|84|0084)87)[0-9]{7}$/,
      // Add other carriers if needed
    };
    

    for (var network in networkPatterns) {
      if (networkPatterns[network].test(phoneNumber)) {
        info.network = network;
        break;
      }
    }
  }

  return info;
}

module.exports = {
  validatePhoneVN,
  infoPhone
};
