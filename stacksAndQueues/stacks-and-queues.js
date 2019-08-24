'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
}

// append(value){
//   if(this.head === null){
//     this.head = new Node(value);
//   } else {
//     this.appendHelper(value, this.head);
//   }
// }
//
// appendHelper(value, current){
//   if(current.next === null){
//     current.next = new Node(value);
//     return;
//   }
//   this.appendHelper(value, current.next);
// }

class Stack {
  constructor(){
    this.storage = new LinkedList();
    this.top = null;
  }

  push(value){
    if(this.top === null){
      this.top = new Node(value);
    } else {
      let newest = new Node(value);
      newest.next = this.top;
      this.top = newest;
    }
  }

  pop(){
    let record = this.top;
    this.top = this.top.next;
    record.next = null;
    return record;
  }
}

class Queue {

}


module.exports = {Node, Stack, Queue};