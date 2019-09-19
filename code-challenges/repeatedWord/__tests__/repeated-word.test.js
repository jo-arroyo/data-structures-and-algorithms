'use strict';

const repeatedWord = require('../repeated-word');

describe('Checks for repeated words', () => {
  test('Returns null if empty string', () => {
    let testString = '';
    expect(repeatedWord(testString)).toEqual(null);
  });

  test('Returns null if string only has one word', () => {
    let testString = 'word';
    expect(repeatedWord(testString)).toEqual(null);
  });

  test('Returns null if string only has two words that are not the same', () => {
    let testString = 'big word';
    expect(repeatedWord(testString)).toEqual(null);
  });

  test('Returns word if string only has two words that are the same', () => {
    let testString = 'rabbit rabbit';
    expect(repeatedWord(testString)).toEqual('rabbit');
  });

  test('Returns word if string is very long and has repeated word', () => {
    let testString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.';
    expect(repeatedWord(testString)).toEqual('it');
  });

  test('Returns word if repeated word is a number', () => {
    let testString = '1974 ... the year was 1974 when';
    expect(repeatedWord(testString)).toEqual('1974');
  });
});