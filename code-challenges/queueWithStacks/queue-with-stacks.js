'use strict';

class Stack {
  constructor(){
    this.storage = [];
    this.size = this.storage.length;
    this.top = null;
  }

  push(value){
    this.storage.push(value);
    this.top = this.storage[this.storage.length -1];
    this.size = this.size + 1;
  }

  pop(){
    let returned = this.storage[this.storage.length -1];
    this.storage.pop();
    this.size = this.size -1;
    this.top = this.storage[this.storage.length -1];
    return returned;
  }

  peek(){
    if(this.top){
      return this.top;
    } else {
      return null;
    }
  }
}

class PseudoQueue {
  constructor(){
    this.stackA = new Stack;
    this.stackB = new Stack;
  }

  enqueue(value){
    this.stackA.push(value);
  }

  dequeue(){
    while(this.stackA.peek()){
      this.stackB.push(this.stackA.pop());
    }
    let outputValue = this.stackB.pop();
    while(this.stackB.peek()){
      this.stackA.push(this.stackB.pop());
    }
    return outputValue;
  }
}

module.exports = PseudoQueue;