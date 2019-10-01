'use strict';

const Node = require('../node');
const {Tree, findMaxValue, findHeight, invertTree} = require('../tree');

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

xdescribe('Find height of binary tree', () => {
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

//TODO Not sure if something is wrong with this test?
describe('Invert a binary tree', () => {
  test('Returns inverted binary tree', () => {
    const testTree = new Tree();
    testTree.root = new Node(1);
    testTree.root.left = new Node(2);
    testTree.root.left.left = new Node(3);
    testTree.root.left.right = new Node(4);
    testTree.root.right = new Node(5);
    testTree.root.right.left = new Node(6);
    testTree.root.right.right = new Node(7);
    expect(invertTree(testTree.root.value)).toEqual(1);
    expect(invertTree(testTree.root.left.value)).toEqual(5);
    expect(invertTree(testTree.root.right.value)).toEqual(2);
    expect(invertTree(testTree.root.left.left.value)).toEqual(7);
    expect(invertTree(testTree.root.left.right.value)).toEqual(6);
    expect(invertTree(testTree.root.right.left.value)).toEqual(4);
    expect(invertTree(testTree.root.right.right.value)).toEqual(3);
  });
});
