const typeCheck = require('./typeCheck');
const typeValues = require("../contants/typeValues")

/**
 * Convert a number to an abbreviated format with standard units
 * @param {number} num - The number to be converted
 * @returns {string} The number converted to an abbreviated format
 */
function formatNumber(num) {

  if (typeCheck(num) !== typeValues.number) {
    return '0'
  }

  // Handle negative numbers
  const isNegative = num < 0; 
  num = Math.abs(num);

  // Define abbreviation units
  const units = ['', 'K', 'M', 'B', 'T', 'Q', 'Qn', 'Sx', 'Sp', 'O', 'N'];

  // Find the appropriate abbreviation unit
  let unitIndex = 0;
  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  // Format the number with 2 decimal places  
  num = num.toFixed(2);

  // Remove unnecessary trailing decimal zeros
  num = parseFloat(num).toString();

  // Add the negative sign if the original number was negative
  const formattedNum = isNegative ? `-${num}${units[unitIndex]}` : `${num}${units[unitIndex]}`;

  return formattedNum;
}

module.exports = formatNumber;