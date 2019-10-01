'use strict';

class Tree {
  constructor(){
    this.root = null;
  }
}

// This doesn't work. See Vinicio's demo in class
const findMaxValue = (current, max = null) => {
  if (!current) {
    return max;
  }
  if (current.value > max){
    max = current.value;
  }
  return findMaxValue(current.left, max) || findMaxValue(current.right, max);
};

const findHeight = (current, height = 1) => {
  if(current === null){
    return null;
  }
  if(current.left === null && current.right === null){
    return height-1;
  } else {
    const leftHeight = findHeight(current.left, height + 1);
    const rightHeight = findHeight(current.right, height + 1);

    return Math.max(leftHeight, rightHeight);
  }
};

// TODO: check this with Vinicio
const invertTree = (node) => {
  if(!node){
    return null;
  }
  // let left = node.left;
  // let right = node.right;
  // node.left = right;
  // node.right = left;
  // invertTree(node.left);
  // invertTree(node.right);
  let right = invertTree(node.right);
  let left = invertTree(node.left);
  node.left = right;
  node.right = left;
  return node;
};

module.exports = {Tree, findMaxValue, findHeight, invertTree};