'use strict';

const Node = require('../node');
const {Tree, findMaxValue, findHeight} = require('../tree');

xdescribe('Find Max Value in Binary Tree', () => {
  test('Returns null if tree is empty', () => {
    const testTree = new Tree();
    expect(findMaxValue(testTree.root)).toEqual(null);
  });

  test('Returns root node value if tree only has one node', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    expect(findMaxValue(testTree.root)).toEqual(1);
  });

  test('Returns larger value of two nodes', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(2);
    expect(findMaxValue(testTree.root)).toEqual(2);
  });

  test('Returns largest value of large binary tree', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);
    testTree.root.left.left = new Node(30);
    testTree.root.left.right = new Node(13);
    testTree.root.right.left = new Node(27);
    testTree.root.right.right = new Node(2);
    expect(findMaxValue(testTree.root)).toEqual(30);
  });
});

describe('Find height of binary tree', () => {
  test('Returns null for empty tree', () => {
    const testTree = new Tree();
    expect(findHeight(testTree.root)).toEqual(null);
  });

  test('Returns 1 for tree with only root node', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    expect(findHeight(testTree.root)).toEqual(0);
  });

  test('Returns height for tree with leaves of same heights', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(1);
    testTree.root.left.left = new Node(1);
    testTree.root.left.right = new Node(1);
    testTree.root.right = new Node(1);
    testTree.root.right.left = new Node(1);
    testTree.root.right.right = new Node(1);
    expect(findHeight(testTree.root)).toEqual(2);
  });

  test('Returns height for tree with leaves of different heights', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(1);
    testTree.root.left.left = new Node(1);
    testTree.root.left.left.left = new Node(1);
    testTree.root.left.left.left.left = new Node(1);
    testTree.root.left.left.left.left.left = new Node(1);
    testTree.root.left.left.left.left.left.left = new Node(1);
    testTree.root.left.right = new Node(1);
    testTree.root.right = new Node(1);
    expect(findHeight(testTree.root)).toEqual(6);
  });
});