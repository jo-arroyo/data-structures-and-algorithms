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

  test('Returns array with string in it if string is a single letter', () => {
    const test = 'a';
    expect(printPermutations(test)).toEqual(['a']);
  });

  test('Returns permutations of string with two characters', () => {
    const test = 'jo';
    expect(printPermutations(test)).toEqual(['jo', 'oj']);
  });

  test('Returns permutations of string', () => {
    const test = 'abc';
    expect(printPermutations(test)).toEqual(['abc', 'bac', 'cab', 'acb', 'bca', 'cba']);
  });

  xtest('Does not return duplicates of permutations', () => {
    const test = 'bab';
    expect(printPermutations(test)).toEqual(['bab', 'abb', 'bba']);
  });
});
