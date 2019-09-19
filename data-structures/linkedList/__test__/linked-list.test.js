'use strict';

const LinkedList = require('../linked-list');

describe('Linked Lists', () => {
  describe('Instantiate', () => {
    test('Can successfully instantiate an empty linked list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.head).toEqual(null);
    });
  });

  describe('Insert', () => {
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

  describe('Searching linked list', () => {
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
  });

  describe('Appending to linked list', () => {
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
  });

  describe('Inserting before or after', () => {
    test('Returns where linked list is empty', () => {
      const linkedList = new LinkedList();
      expect(linkedList.insertBefore(1, 10)).toEqual(undefined);
      expect(linkedList.insertAfter(1, 10)).toEqual(undefined);
    });

    test('Can successfully insert a node before a node located i the middle of a linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(4);
      linkedList.append(5);
      linkedList.append(6);
      linkedList.insertBefore(4, 3);
      expect(linkedList.head.next.next.value).toEqual(3);
      expect(linkedList.head.next.next.next.value).toEqual(4);
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

  describe('Find k from end', () => {
    test('Where k is greater than the length of the linked list', () =>{
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.getKFromEnd(3)).toEqual('Invalid k');
    });

    test('Where k and the length of the list are the same', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.getKFromEnd(2)).toEqual('Invalid k');
    });

    test('Where k is not a positive integer', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      expect(linkedList.getKFromEnd(-1)).toEqual(4);
    });

    test('Where the linked list is of a size 1', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      expect(linkedList.getKFromEnd(1)).toEqual('Invalid k');
    });

    test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      expect(linkedList.getKFromEnd(2)).toEqual(2);
      expect(linkedList.getKFromEnd(1)).toEqual(3);
      expect(linkedList.getKFromEnd(3)).toEqual(1);
    });
  });

  describe('Finding the middle', () => {
    test('Get the middle value of the linked list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);
      expect(linkedList.findMiddle().value).toEqual(3);
    });

    test('Finds middle closer to start when list is even', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      expect(linkedList.findMiddle().value).toEqual(2);
    });
  });

  describe('Reversing a linked list', () => {
    test('Can reverse a linked list which contains one node', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.reverse();
      expect(linkedList.head.value).toEqual(1);
    });

    test('Can reverse a linked list which contains two nodes', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.reverse();
      expect(linkedList.head.value).toEqual(2);
      expect(linkedList.head.next.value).toEqual(1);
      expect(linkedList.head.next.next).toEqual(null);
    });

    test('Can reverse a linked list in place', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.reverse();
      expect(linkedList.head.value).toEqual(4);
      expect(linkedList.head.next.value).toEqual(3);
      expect(linkedList.head.next.next.value).toEqual(2);
      expect(linkedList.head.next.next.next.value).toEqual(1);
      expect(linkedList.head.next.next.next.next).toEqual(null);
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
    });

    test('returns second to last node value if last node is a duplicate', () => {
      const linkedList = new LinkedList();
      linkedList.append(3);
      linkedList.append(1);
      linkedList.append(3);
      let returnedValue = linkedList.removeDuplicates();
      expect(returnedValue.value).toEqual(1);
    });
  });
});

