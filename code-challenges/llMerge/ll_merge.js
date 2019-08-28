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

const mergeLists = (listA, listB) => {
  if(listA.head === null){
    return listB;
  }

  if(listB.head === null){
    return listA;
  }

  let anchor;
  let first = listA.head;
  let second = listB.head;

  while(first.next !== null && second !== null){
    anchor = first.next;
    first.next = second;
    first = anchor;
    anchor = second.next;
    second.next = first;
    second = anchor;
  }

  if(first.next === null){
    first.next = second;
    return listA;
  } else {
    return listA;
  }
};

module.exports = {LinkedList, mergeLists};