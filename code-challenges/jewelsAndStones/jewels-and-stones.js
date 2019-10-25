'use strict';

const numJewelsAndStones = (J, S) => {
  let totalJewels = 0;
  if (typeof J !== 'string' || typeof S !== 'string'){
    return totalJewels;
  }
  if (J.length < 1 || J.length < 1){
    return totalJewels;
  }
  let temp = null;
  for (let i = 0; i < S.length; i++){
    temp = S.slice(i, i + 1);
    if(J.includes(temp)){
      totalJewels++;
    }
  }
  return totalJewels;
};

module.exports = numJewelsAndStones;
