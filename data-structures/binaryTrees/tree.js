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

// Checking for balanced tree - Jacob's demo
// Time O(n2) Space O(n)
const isTreeBalanced = (node) => {
  // Handle leaves being passed down
  if (node === null){
    return true;
  }

  let leftHeight;
  let rightHeight;

  leftHeight = height(node.left);
  rightHeight = height (node.right);

  // Comparing heights and making sure they are in acceptable range
  // Recursively checking children
  if (Math.abs(leftHeight - rightHeight) <= 1
    && isTreeBalanced(node.left)
    && isTreeBalanced(node.right)){
    return true;
  }

  return false;
};

const height = (node) => {
  let count = 0;
  if (node === null) {
    return count;
  }
  //Since height is longest path to leaf
  //Return longest path
  return ((count + 1) + Math.max(height(node.left), height(node.right)));
};

module.exports = {Tree, findMaxValue, findHeight, invertTree};