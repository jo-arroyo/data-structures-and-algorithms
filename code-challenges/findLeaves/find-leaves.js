'use strict';

class Tree {
  constructor(){
    this.root = null;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findLeaves = (root) => {
  let leaves = [];
  if (root.left === null && root.right === null){
    leaves.push(root.value);
  } else {
    leavesHelper(root, leaves);
  }
  return leaves;
};

const leavesHelper = (current, leaves) => {
  if(current === null){
    return;
  }
  if(current.left === null && current.right === null){
    leaves.push(current.value);
    return;
  }
  leavesHelper(current.left, leaves);
  leavesHelper(current.right, leaves);
};

module.exports = {Tree, Node, findLeaves};