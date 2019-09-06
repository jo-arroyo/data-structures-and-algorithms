'use strict';

const {Tree, Node, findPathLength} = require('../findPathLength');

describe('Find Path Length in a Binary Tree', () => {
  test('Returns null if empty tree', () => {
    const tree = new Tree();
    expect(findPathLength(tree.root, 1, 2)).toEqual(null);
  });

  test('Returns null if parent is not on tree', () => {
    const tree = new Tree();
    tree.root = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(3);
    expect(findPathLength(tree.root, 4, 2)).toEqual(null);
  });

  test('Returns null if child is not on tree', () => {
    const tree = new Tree();
    tree.root = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(3);
    expect(findPathLength(tree.root, 1, 4)).toEqual(null);
  });

  test('Returns path length', () => {
    const tree = new Tree();
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    tree.root = one;
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    four.left = six;
    expect(findPathLength(tree.root, 2, 6)).toEqual(2);
  });
});