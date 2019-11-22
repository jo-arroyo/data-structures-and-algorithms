'use strict';

const printPermutations = require('./permutations');

describe('String Permutation Function', () => {
  test('Returns empty array if not a string', () => {
    const test = 1;
    expect(printPermutations(test)).toEqual([]);
  });

  test('Returns empty array if empty string', () => {
    const test = '';
    expect(printPermutations(test)).toEqual([]);
  });

  test('Returns permutations of string', () => {
    const test = 'abc';
    expect(printPermutations(test)).toEqual(['abc', 'bca', 'cab', 'bac', 'acb', 'cba']);
  });

  test('Does not return duplicates of permuations', () => {
    const test = 'bab';
    expect(printPermutations(test)).toEqual(['bab', 'abb', 'bba']);
  });
});