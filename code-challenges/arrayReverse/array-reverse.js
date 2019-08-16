'use strict';

const reverseArray = (array) => {
  if(!Array.isArray(array)){
    return undefined;
  }
  if(array.length < 2){
    return array;
  }
  for(let i = 0; i < array.length/2; i++){
    let stored = array[i];
    array[i] = array[array.length -1 -i];
    array[array.length -1 -i] = stored;
  }
  return array;
}

module.exports = reverseArray;