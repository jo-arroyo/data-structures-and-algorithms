'use strict';

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