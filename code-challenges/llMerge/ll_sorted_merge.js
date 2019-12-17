'use strict';

const mergeSortedLists = (listA, listB) => {
  if(!listA.head){
    return listB;
  }

  if(!listB.head){
    return listA;
  }

  let anchor; 

  if (listA.head.value > listB.head.value){
    anchor = listA.head;
    listA.head = listB.head;
    listB.head = anchor;
  }

  let first = listA.head;
  let second = listB.head;
  let insert;

  while(first.next !== null && second !== null){
    if(second.value > first.value && second.value > first.next.value){
      first = first.next;
    } else {
      insert = second;
      second = second.next;
      insert.next = first.next;
      first.next = insert;
      first = first.next.next;
    }
  }
  
  if (first.next === null && second !== null){
    first.next = second;
  }

  return listA;
};

module.exports = mergeSortedLists;