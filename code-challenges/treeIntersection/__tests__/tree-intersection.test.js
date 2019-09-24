const {Node, Tree, createUnionAndIntersection} = require('../tree-intersection');

describe('', () => {
  test('Returns null if both trees are empty', () => {
    const treeA = new Tree();
    const treeB = new Tree();
    expect(createUnionAndIntersection(treeA.root, treeB.root)).toEqual(null);
  });

  test('Returns null if one tree is empty', () => {
    const treeA = new Tree();
    const treeB = new Tree();
    treeB.root = new Node(1);
    expect(createUnionAndIntersection(treeA.root, treeB.root)).toEqual(null);
  });

  test('Returns union and intersection on two trees', () => {
    const treeA = new Tree();
    const treeB = new Tree();
    treeA.root = new Node(1);
    treeA.root.left = new Node(2);
    treeA.root.right = new Node(3);
    treeB.root = new Node(4);
    treeB.root.left = new Node(2);
    treeB.root.right = new Node(5);
    expect(createUnionAndIntersection(treeA.root, treeB.root).intersection.has(2)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).intersection.has(1)).toEqual(false);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(1)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(2)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(3)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(4)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(5)).toEqual(true);
  });

  test('Returns union and no intersection if there is no intersection of two trees', () => {
    const treeA = new Tree();
    const treeB = new Tree();
    treeA.root = new Node(10);
    treeA.root.left = new Node(20);
    treeA.root.right = new Node(30);
    treeB.root = new Node(40);
    treeB.root.left = new Node(50);
    treeB.root.right = new Node(60);
    expect(createUnionAndIntersection(treeA.root, treeB.root).intersection.has(10)).toEqual(false);
    expect(createUnionAndIntersection(treeA.root, treeB.root).intersection.has(20)).toEqual(false);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(10)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(20)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(30)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(40)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(50)).toEqual(true);
    expect(createUnionAndIntersection(treeA.root, treeB.root).union.has(60)).toEqual(true);
  });
});