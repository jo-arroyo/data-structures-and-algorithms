'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
}

const createUnionAndIntersection = (rootA, rootB) => {
  if (rootA === null || rootB === null){
    return null;
  }
  let uSet = new Set();
  let iSet = new Set();
  createHelper(rootA, uSet, iSet);
  createHelper(rootB, uSet, iSet);
  return {'union': uSet, 'intersection': iSet};
};

const createHelper = (current, uSet, iSet) => {
  if(current === null){
    return;
  }
  uSet.has(current.value) ? iSet.add(current.value) : uSet.add(current.value);
  createHelper(current.left, uSet, iSet);
  createHelper(current.right, uSet, iSet);
};

module.exports = {Node, Tree, createUnionAndIntersection};