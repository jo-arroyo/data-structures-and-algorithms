'use strict';

const LinkedList = require('../doubly-linked-list');

describe('Linked Lists', () => {
  describe('Instantiate', () => {
    test('Can successfully instantiate an empty linked list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.head).toEqual(null);
    });
  });

  describe('Appending to linked list', () => {
    test('Can successfully add a node to the end of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      expect(linkedList.head.value).toEqual(1);
      expect(linkedList.head.next).toEqual(null);
      expect(linkedList.head.previous).toEqual(null);
    });

    test('Can successfully add multiple nodes to the end of a linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append('a');
      linkedList.append('b');
      linkedList.append('c');
      expect(linkedList.head.value).toEqual('a');
      expect(linkedList.head.next.value).toEqual('b');
      expect(linkedList.head.previous).toEqual(null);
      expect(linkedList.head.next.previous.value).toEqual('a');
      expect(linkedList.head.next.next.value).toEqual('c');
      expect(linkedList.head.next.next.previous.value).toEqual('b');
      expect(linkedList.head.next.next.next).toEqual(null);
    });
  });

  describe('Removing duplicates from linked list', () => {
    test('returns null if no linked list instantiated', () => {
      const linkedList = new LinkedList();
      expect(linkedList.head).toEqual(null);
    });

    test('returns head if only one node', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      let returnedValue = linkedList.removeDuplicates();
      expect(linkedList.head.value).toEqual(1);
      expect(returnedValue.value).toEqual(1);
    });

    test('returns last node if it traverses through the list and there are no duplicates', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);
      let returnedValue = linkedList.removeDuplicates();
      expect(returnedValue.value).toEqual(5);
      expect(returnedValue.next).toEqual(null);
      expect(returnedValue.previous.value).toEqual(4);
    });

    test('returns second to last node value if last node is a duplicate', () => {
      const linkedList = new LinkedList();
      linkedList.append(3);
      linkedList.append(1);
      linkedList.append(3);
      let returnedValue = linkedList.removeDuplicates();
      expect(returnedValue.value).toEqual(1);
      expect(returnedValue.previous).toEqual(null);
      expect(returnedValue.next).toEqual(null);
    });
  });
});

