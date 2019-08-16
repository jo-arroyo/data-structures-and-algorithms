'use strict';

const reverseArray = require('../array-reverse');

describe('#reverseArray', () => {
  test('It should return the reversed array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(reverseArray([1, null, 'word', 5])).toEqual([5, 'word', null, 1]);
  });
  test('It should return the original array if the length of the array is less than two', () => {
    expect(reverseArray([1])).toEqual([1]);
    expect(reverseArray([])).toEqual([]);
  });
  test('It should return undefined if the input was not an array', () => {
    expect(reverseArray('word')).toEqual(undefined);
    expect(reverseArray({a: 1})).toEqual(undefined);
  });
});