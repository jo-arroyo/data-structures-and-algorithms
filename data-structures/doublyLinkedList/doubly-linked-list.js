'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  // WORK ON THIS
  removeDuplicates(){
    if(!this.head || !this.head.next){
      return this.head;
    }
    let set = new Set();
    let root = this.head;
    let current = root.next;
    set.add(root.value);
    while(root.next && root.next.next){
      if (set.has(current.value)){
        let newest = root.next.next;
        newest.previous = root;
        root.next = newest;
      } else {
        set.add(current.value);
        root.previous = root;
        root = root.next;
      }
    }
    if(set.has(root.next.value)){
      root.next = null;
    } else {
      root.previous = root;
      root = root.next;
    }
    return root;
  }
}

module.exports = LinkedList;