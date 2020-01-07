'use strict';

const isHappy = (n) => {
  if(typeof n !== "number"){
    return false;
  }
  const set = new Set();
  return happyHelper(n, set);
}

const happyHelper = (n, set) => {
  if(n === 1){
    return true;
  }
  if(set.has(n)){
    return false;
  }

  set.add(n);
  let numStringArray = n.toString().split('');
  let numArray = numStringArray.map(Number);
  let total = numArray.reduce((accumulator, digit) => {
    return accumulator + digit * digit;
  }, 0)
  return happyHelper(total, set);
}

module.exports = isHappy;