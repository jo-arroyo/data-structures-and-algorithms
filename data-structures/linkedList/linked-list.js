'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const newHead = new Node(value);

    if(this.head === null){
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

  }

  includes(){

  }

  toString(){

  }
}

module.exports = LinkedList;