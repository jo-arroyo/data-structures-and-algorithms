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

const findPathLength = (root, parent, child, path = 0) => {
  if(root === null){
    return null;
  }
  if(root.left === null && root.right === null){
    return null;
  }
  if(root.value === child){
    return;
  } else {
    if(root.value !== parent || path > 0){
      findPathLength(root.left, parent, child, path);
      findPathLength(root.right, parent, child, path);
    }
    if(root.value !== child){
      findPathLength(root.left, parent, child, path = path + 1);
      findPathLength(root.right, parent, child, path = path + 1);
    }
  }
  return path;
};

module.exports = {Tree, Node, findPathLength};