'use strict';

const leftJoin = require('../left-join');

describe('Left join', () => {
  test('Does not join two tables that have no overlapping keys', () => {
    const testA = new Map;
    const testB = new Map;
    testA.set('rich', 'really rich').set('wet', 'washy');
    testB.set('poor', 'not rich').set('sunny', 'bright');
    expect(leftJoin(testA, testB)).toEqual([['rich', 'really rich', null], ['wet', 'washy', null]]);
  });

  test('Joins two hash tables that have all the same keys', () => {
    const testA = new Map;
    const testB = new Map;
    testA.set('high', 'tall').set('large', 'big');
    testB.set('high', 'up there').set('large', 'wide');
    expect(leftJoin(testA, testB)).toEqual([["high", "tall", "up there"], ["large", "big", "wide"]]);
  });

  test('Joins two hash tables that do not have the same keys', () => {
    const testA = new Map;
    const testB = new Map;
    testA.set('happy', 'glad').set('sleepy', 'tired').set('mad', 'angry');
    testB.set('happy', 'sad').set('sleepy', 'awake').set('calm', 'agitated');
    expect(leftJoin(testA, testB)).toEqual([["happy", "glad", "sad"], ["sleepy", "tired", "awake"], ["mad", "angry", null]]);
  });
});
