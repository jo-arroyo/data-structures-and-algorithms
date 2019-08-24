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

  peek(){
    if(this.top){
      return this.top.value;
    } else {
      return null;
    }
  }
}

class Queue {

}


module.exports = {Node, Stack, Queue};