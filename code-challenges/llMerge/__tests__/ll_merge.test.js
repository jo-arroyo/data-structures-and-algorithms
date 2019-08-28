'use strict';

const {LinkedList, mergeLists} = require('../ll_merge');

describe('Merging linked lists', () => {
  test('Returns first list if second list is null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(2);
    listA.insert(1);
    let result = mergeLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
  });

  test('Returns second list if first list is null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listB.insert(4);
    listB.insert(3);
    let result = mergeLists(listA, listB);
    expect(result.head.value).toEqual(3);
    expect(result.head.next.value).toEqual(4);
  });

  test('Returns null if both lists are null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    let result = mergeLists(listA, listB);
    expect(result.head).toEqual(null);
  });

  test('Returns the merged list if both lists are not null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('b');
    listA.insert('a');
    listB.insert(2);
    listB.insert(1);
    let result = mergeLists(listA, listB);
    expect(result.head.value).toEqual('a');
    expect(result.head.next.value).toEqual(1);
    expect(result.head.next.next.value).toEqual('b');
    expect(result.head.next.next.next.value).toEqual(2);
  });

  test('Returns the merged list if the first list is longer', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('c');
    listA.insert('b');
    listA.insert('a');
    listB.insert(1);
    let result = mergeLists(listA, listB);
    expect(result.head.value).toEqual('a');
    expect(result.head.next.value).toEqual(1);
    expect(result.head.next.next.value).toEqual('b');
    expect(result.head.next.next.next.value).toEqual('c');
  });

  test('Returns the merged list if the second list is longer', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert('a');
    listB.insert(3);
    listB.insert(2);
    listB.insert(1);
    let result = mergeLists(listA, listB);
    expect(result.head.value).toEqual('a');
    expect(result.head.next.value).toEqual(1);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(3);
  });
});