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

  includes(input){
    let current = this.head;
    while(current !== null){
      if(current.value === input){
        return true;
      }
      current = current.next;
    }
    return false;
  }


  toString(){
    let current = this.head;
    let myString = '';
    while(current !== null){
      myString = myString + current.value;
      current = current.next;
    }
    return myString;
  }
}

module.exports = LinkedList;