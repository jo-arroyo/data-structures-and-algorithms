'use strict';

// const mergeSortedLists = (l1, l2) => { //JO - this works on Leetcode but not on my machine?
//   if(!l1.head){
//     return l2;
//   }

//   if(!l2.head){
//     return l1;
//   }

//   let start; 

//   if (l1.head.val > l2.head.val){
//     start = l2;
//     l2 = l2.next;
//   } else {
//     start = l1;
//     l1 = l1.next;
//   }

//   let current = start;
  
//   while(l1 !== null|| l2 !== null){
//     if(l1 === null){
//       current.next = l2;
//       break;
//     }
//     if(l2 === null){
//       current.next = l1;
//       break;
//     }
//     if(l1.val < l2.val){
//       current.next = l1;
//       current = l1;
//       l1 = l1.next;
//     } else {
//       current.next = l2;
//       current = l2;
//       l2 = l2.next;
//     }
//   }
//   return start;
// };

const mergeSortedLists = (listA, listB) => { //JO - MY CODE - works for all but one?
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