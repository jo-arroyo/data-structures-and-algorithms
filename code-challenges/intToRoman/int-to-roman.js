'use strict';

const intToRoman = num => {
  if (typeof num !== 'number') return false;
  let result = '';

  let roman = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];

  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    let current = Math.floor(num % 10);
    num = num / 10;
    if (current < 4) {
      result = roman[i][0].repeat(current) + result;
    } else if (current === 4) {
      result = roman[i][0] + roman[i][1] + result;
    } else if (current < 9 && current >= 5) {
      result = roman[i][1] + roman[i][0].repeat(current - 5) + result;
    } else if (current === 9) {
      result = roman[i][0] + roman[i][2] + result;
    }
  }

  return result;
};

module.exports = intToRoman;
