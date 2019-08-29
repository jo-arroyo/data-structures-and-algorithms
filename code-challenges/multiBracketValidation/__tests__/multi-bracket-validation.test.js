'use strict';

const multiBracketValidation = require('../multi-bracket-validation');

describe('Multiple Bracket Validation', () => {
  test('Returns null when input is not a string', () => {
    expect(multiBracketValidation([1, 2, 3])).toEqual(false);
    expect(multiBracketValidation(true)).toEqual(false);
    expect(multiBracketValidation({username: 'password'})).toEqual(false);
  });

  test('Returns true when input has matching brackets', () => {
    expect(multiBracketValidation('()')).toEqual(true);
    expect(multiBracketValidation('{([])}')).toEqual(true);
    expect(multiBracketValidation('abc{([])}')).toEqual(true);
    expect(multiBracketValidation('{a(b[c]d)e}f')).toEqual(true);
  });

  test('Returns false when input has incorrectly matched brackets', () => {
    expect(multiBracketValidation(']')).toEqual(false);
    expect(multiBracketValidation('(]')).toEqual(false);
    expect(multiBracketValidation('([)]')).toEqual(false);
    expect(multiBracketValidation('()}}}')).toEqual(false);
  });

});