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

const findHeight = (current, height = 0) => {
  if(current === null){
    return null;
  }
  if(current.left === null && current.right === null){
    return height;
  } else {
    const leftHeight = findHeight(current.left, height + 1);
    const rightHeight = findHeight(current.right, height + 1);

    return Math.max(leftHeight, rightHeight);
  }
};

module.exports = {Tree, findMaxValue, findHeight};