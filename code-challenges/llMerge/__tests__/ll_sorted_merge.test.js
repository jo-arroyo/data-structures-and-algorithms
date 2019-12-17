'use strict';

const LinkedList = require('../LinkedList');
const mergeSortedLists = require('../ll_sorted_merge');

describe('Merging sorted linked lists', () => {
  test('Returns first list if second list is null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(2);
    listA.insert(1);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
  });

  test('Returns second list if first list is null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listB.insert(4);
    listB.insert(3);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(3);
    expect(result.head.next.value).toEqual(4);
  });

  test('Returns null if both lists are null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    let result = mergeSortedLists(listA, listB);
    expect(result.head).toEqual(null);
  });

  test('Returns the merged list if both lists are not null', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(3);
    listA.insert(1);
    listB.insert(4);
    listB.insert(2);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
    expect(result.head.next.next.value).toEqual(3);
    expect(result.head.next.next.next.value).toEqual(4);
  });

  test('Returns the merged list if the first list is longer', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(2);
    listA.insert(1);
    listA.insert(1);
    listB.insert(3);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(1);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(3);
  });

  test('Returns the merged list if the second list is longer', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(1);
    listB.insert(4);
    listB.insert(2);
    listB.insert(2);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
    expect(result.head.next.next.value).toEqual(2);
    expect(result.head.next.next.next.value).toEqual(4);
  });

  test('Returns the merged list if the second list has the lowest starting number', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(2);
    listB.insert(1);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
  });

  test('Returns the merged list if the second list has the lowest starting number and is longer', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(5);
    listB.insert(4);
    listB.insert(2);
    listB.insert(1);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(1);
    expect(result.head.next.value).toEqual(2);
    expect(result.head.next.next.value).toEqual(4);
    expect(result.head.next.next.next.value).toEqual(5);
  });

  xtest('Returns the merged list with negative numbers', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    listA.insert(9);
    listA.insert(9);
    listA.insert(1);
    listA.insert(-4);
    listA.insert(-6);
    listA.insert(-9);
    listA.insert(-10);
    listB.insert(8);
    listB.insert(8);
    listB.insert(7);
    listB.insert(0);
    listB.insert(-3);
    listB.insert(-5);
    let result = mergeSortedLists(listA, listB);
    expect(result.head.value).toEqual(-10);
    expect(result.head.next.value).toEqual(-9);
    expect(result.head.next.next.value).toEqual(-6);
    expect(result.head.next.next.next.value).toEqual(-5);
    expect(result.head.next.next.next.next.value).toEqual(-4);
    expect(result.head.next.next.next.next.next.value).toEqual(-3);
    expect(result.head.next.next.next.next.next.next.value).toEqual(0);
    expect(result.head.next.next.next.next.next.next.next.value).toEqual(1);
    expect(result.head.next.next.next.next.next.next.next.next.value).toEqual(7);
    expect(result.head.next.next.next.next.next.next.next.next.next.value).toEqual(8);
    expect(result.head.next.next.next.next.next.next.next.next.next.next.value).toEqual(8);
    expect(result.head.next.next.next.next.next.next.next.next.next.next.next.value).toEqual(9);
    expect(result.head.next.next.next.next.next.next.next.next.next.next.next.next.value).toEqual(9);
  });
});