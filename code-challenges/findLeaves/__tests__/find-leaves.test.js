'use strict';

const {Tree, Node, findLeaves} = require('../find-leaves');

describe('Can find all leaves in a binary tree', () => {
  test('Returns root as the only leaf when the tree only has the root', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    expect(findLeaves(tree.root)).toEqual([10]);
  });

  test('Returns leaves of a balanced tree', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    let tree = new Tree();
    tree.root = four;
    four.left = two;
    four.right = five;
    two.left = one;
    two.right = three;
    five.left = six;
    five.right = seven;
    expect(findLeaves(tree.root)).toEqual([1, 3, 6, 7]);
  });

  test('Returns leaves of an imbalanced tree', () => {
    const two = new Node(2);
    const four = new Node(4);
    let tree = new Tree();
    tree.root = four;
    four.left = two;
    expect(findLeaves(tree.root)).toEqual([2]);
  });

  test('Returns leaves when values are not just integers', () => {
    const eight = new Node(8);
    const a = new Node('a');
    const b = new Node('b');
    let tree = new Tree();
    tree.root = a;
    a.left = b;
    a.right = eight;
    expect(findLeaves(tree.root)).toEqual(['b', 8]);
  });
});