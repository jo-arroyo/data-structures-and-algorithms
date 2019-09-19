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

  append(value){
    if(this.head === null){
      this.head = new Node(value);
    } else {
      this.appendHelper(value, this.head);
    }
  }

  appendHelper(value, current){
    if(current.next === null){
      current.next = new Node(value);
      return;
    }
    this.appendHelper(value, current.next);
  }

  insertBefore(value, newValue){
    if(this.head === null){
      return;
    } else if (this.head.next === null && this.head.value === value){
      let insert = new Node(newValue);
      insert.next = this.head;
      this.head = insert;
    } else {
      this.insertBeforeHelper(value, newValue);
    }
  }

  insertBeforeHelper(value, newValue){
    let first = this.head;
    let second = this.head.next;
    while(second.value !== value){
      first = first.next;
      second = second.next;
    }
    let insert = new Node(newValue);
    first.next = insert;
    insert.next = second;
  }

  insertAfter(value, newValue){
    if(this.head === null){
      return;
    } else {
      this.insertAfterHelper(value, newValue);
    }
  }

  insertAfterHelper(value, newValue){
    let first = this.head;
    while(first.value !== value && first.next !== null){
      first = first.next;
    }
    let insert = new Node(newValue);
    insert.next = first.next;
    first.next = insert;
  }

  getKFromEnd(k){
    let first = this.head;
    let second = this.head;
    for(let i = 0; i < k; i++){
      if(second === null || second.next === null){
        return 'Invalid k';
      } else {
        second = second.next;
      }
    }
    while(second.next !== null){
      first = first.next;
      second = second.next;
    }
    return first.value;
  }

  findMiddle(){
    let slow = this.head;
    let fast = this.head;
    while (fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse(){
    if(this.head.next === null){
      return this.head;
    } else {
      let last = this.head;
      let middle = this.head.next;
      let first = this.head.next.next;
      last.next = null;
      while (first !== null) {
        middle.next = last;
        last = middle;
        middle = first;
        first = first.next;
      }
      middle.next = last;
      this.head = middle;
    }
  }

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
        root.next = root.next.next;
      } else {
        set.add(current.value);
        root = root.next;
      }
    }
    if(set.has(root.next.value)){
      root.next = null;
    } else {
      root = root.next;
    }
    return root;
  }
}

module.exports = LinkedList;