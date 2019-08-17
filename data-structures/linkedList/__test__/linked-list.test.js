'use strict';

const LinkedList = require('../linked-list');

describe('Linked Lists', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toEqual(null);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(1);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    linkedList.insert('c');
    expect(linkedList.head.value).toEqual('c');
    expect(linkedList.head.next.value).toEqual('b');
    expect(linkedList.head.next.next.value).toEqual('a');
    expect(linkedList.head.next.next.next).toEqual(null);
  });
});

/*
*
*

Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list
*
*
*
*
*
* */