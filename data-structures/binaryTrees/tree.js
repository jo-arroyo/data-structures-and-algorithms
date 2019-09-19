'use strict';

class Tree {
  constructor(){
    this.root = null;
  }
}

const findMaxValue = (current, max = null) => {
  if (!current) {
    return max;
  }
  if (current.value > max){
    max = current.value;
  }
  return findMaxValue(current.left, max) || findMaxValue(current.right, max);
};

module.exports = {Tree, findMaxValue};