'use strict';

const romanToInteger = (input) => {
  if(typeof input !== 'string'){
    return 'Invalid input!';
  }
  const romanObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  let final = 0;
  for (let i = 0; i < input.length; i++){
    let firstLetter = input[i];
    let secondLetter = input[i+1];
    let first = romanObj[firstLetter];
    let second = romanObj[secondLetter];
    if(first < second){
      final = final + second - first;
      i++;
    } else {
      final = final + first;
    }
  }
  return final;
};

module.exports = romanToInteger;