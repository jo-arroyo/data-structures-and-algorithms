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

  test('Will return true when finding a value within the linked list that exists', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.includes(1)).toEqual(true);
    expect(linkedList.includes(3)).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.includes('a')).toEqual(false);
    expect(linkedList.includes(null)).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('Beans');
    linkedList.insert('Carrots');
    linkedList.insert('Potatoes');
    expect(linkedList.toString()).toEqual('PotatoesCarrotsBeans');
  });

  test('Can successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.append(3);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next).toEqual(null);
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');
    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.head.next.value).toEqual('b');
    expect(linkedList.head.next.next.value).toEqual('c');
    expect(linkedList.head.next.next.next).toEqual(null);
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.insertBefore(5, 4);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(5);
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.insertBefore(3, 2);
    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(3);
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(5);
    linkedList.insertAfter(3, 4);
    expect(linkedList.head.next.value).toEqual(3);
    expect(linkedList.head.next.next.value).toEqual(4);
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next).toEqual(null);
  });
});