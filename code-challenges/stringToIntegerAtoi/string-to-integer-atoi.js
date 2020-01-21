'use strict';

const myAtoi = str => {
  if (str === null || str.length === 0) return 0;
  let whiteSpace = ' '.charCodeAt(0);
  let zero = '0'.charCodeAt();
  let sign = 1;
  let newInt = 0;

  if (str.charCodeAt(0) === whiteSpace) {
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(0) === whiteSpace) {
        str = str.slice(1);
      }
    }
  }

  if (str[0] === '+') {
    str = str.slice(1);
  } else if (str[0] === '-') {
    sign = -1;
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    let currentNum = str.charCodeAt(i);
    if (zero <= currentNum && currentNum - zero <= 9) {
      newInt = newInt * 10 + (str.charCodeAt(i) - zero);
    } else {
      return adjustRange(newInt * sign);
    }
  }

  return adjustRange(newInt * sign);
};

const adjustRange = num => {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  if (num > max) return max;
  if (num < min) return min;

  return num;
};

// BETTER LEETCODE SOLUTION

// var map = {'1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0};

// const minValue = (-1)*Math.pow(2, 31), maxValue = Math.pow(2, 31)-1;

// var myAtoi = function(str) {
//     if(str == null || str.length == 0)
//         return 0;
//     let pos = 0, sign = 1, result = 0;
//     while(str[pos] == ' '){
//         pos++;
//     }
//     if(str[pos] == '+'){
//         pos++;
//     }else if(str[pos] == '-'){
//         sign = -1;
//         pos++;
//     }
//     while(map[str[pos]] != null){
//         result = (result*10)+map[str[pos]];
//         if(sign == 1 && result >= maxValue){
//             return maxValue;
//         }
//         if(sign == -1 && result >= -minValue){
//             return minValue;
//         }
//         pos++;
//     }
//     return result*sign;
// };

module.exports = myAtoi;
