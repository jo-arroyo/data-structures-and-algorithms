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

  insert(value){
    const newHead = new Node(value);

    if(this.head === null){
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  }
}

const emmmHelper = (current, number) => {
  let count = 0;
  while(count < number -1){
    current = current.next;
    count++;
  }
};

const emmm = (head, number) => {
  if(head === null){
    return null;
  }
  while(head.next !== head){
    emmmHelper(head, number);
  }
  return head;
};

module.exports = {Node, LinkedList, emmm};