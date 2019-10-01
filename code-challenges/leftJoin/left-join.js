'use strict';

const leftJoin = (hashA, hashB) => {
  let joined = [];
  hashA.forEach((value, key, map) => {
    let thirdValue = null;
    if(hashB.has(key)){
      thirdValue = hashB.get(key);
    } else {
      thirdValue = null;
    }
    joined.push([key, value, thirdValue]);
  });
  return joined;
};

module.exports = leftJoin;
