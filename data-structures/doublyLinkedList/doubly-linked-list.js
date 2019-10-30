'use strict';

class Node {
  constructor(val, prev, next, child){
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}

class DoublyLinkedList {
  constructor(head, tail){
    this.head = head;
    this.tail = tail;
  }
}

const flatten = (head) => {
  if (!head){
    return;
  }
  if (!head.next && !head.child){
    return;
  }
  while(head.next){
    if (head.child){
      flattenHelper(head);
    }
    head = head.next;
  }
};

const flattenHelper = (node) => {
  let topLevelNext = node.next;
  topLevelNext.prev = null;
  let bottomLevelHead = node.child;
  node.child = null;
  node.next = bottomLevelHead;
  bottomLevelHead.prev = node;
  while(bottomLevelHead.next){
    if(bottomLevelHead.child){
      flattenHelper(bottomLevelHead)
    }
    bottomLevelHead = bottomLevelHead.next;
  }
  bottomLevelHead.next = topLevelNext;
  topLevelNext.prev = bottomLevelHead;
};

module.exports = {Node, DoublyLinkedList, flatten };