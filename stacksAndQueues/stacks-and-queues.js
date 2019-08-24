'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
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
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newest = new Node(value);
    if(!this.front){
      this.front = newest;
      this.back = newest;
    } else {
      this.back.next = newest;
      this.back = newest;
    }
  }

  dequeue(){
    let returned = this.front;
    this.front = this.front.next;
    returned.next = null;
    return returned.value;
  }

  peek(){
    if(this.front){
      return this.front.value;
    } else {
      return null;
    }
  }
}

class StackAlt {
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

class QueueAlt {
  constructor(){
    this.storage = [];
    this.front = null;
    this.back = null;
    this.size = null;
  }

  enqueue(value){

  }

  dequeue(){

  }

  peek(){

  }
}

module.exports = {Stack, Queue, StackAlt, QueueAlt};