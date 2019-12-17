'use strict';

const printPermutations = (string) => {
  let permutations = [];

  if (typeof string !== 'string'){
    return permutations;
  }

  if (string.length < 1){
    return permutations;
  }

  // if (string.length === 1){
  //   permutations.push(string);
  //   return permutations
  // }
  const stringArray = string.split('');

  permutationHelper(string.length, stringArray, permutations);

  return permutations;
};

const permutationHelper = (length, stringArray, permutationArray) => {
  if (length === 1) {
    permutationArray.push(stringArray.join(''));
    return permutationArray;
  } else {
    permutationHelper(length - 1, stringArray, permutationArray);
    for (let i = 0; i < length - 1; i++){
      if (length % 2 === 0) {
        let temp = stringArray[i];
        stringArray[i] = stringArray[length - 1];
        stringArray[length - 1] = temp;
      } else {
        let temp = stringArray[0];
        stringArray[0] = stringArray[length - 1];
        stringArray[length - 1] = temp;
      }
      permutationHelper(length - 1, stringArray, permutationArray);
    }
  }
};

module.exports = printPermutations;