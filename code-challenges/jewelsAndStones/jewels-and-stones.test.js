const numJewelsAndStones = require('./jewels-and-stones');

describe('Finding all Jewels in Stones string method', () => {
  test('Returns 0 if input is not a string', () => {
    const J = null;
    const S = 'abc';
    expect(numJewelsAndStones(J, S)).toEqual(0);
  });

  test('Returns 0 if input strings are empty', () => {
    const J = 'abc';
    const S = '';
    expect(numJewelsAndStones(J, S)).toEqual(0);
  });

  test('Returns number of instances letters in J appear in S', () => {
    const J = 'abc';
    const S = 'bobcat';
    expect(numJewelsAndStones(J, S)).toEqual(4);
  });

  test('Returns correct number of instances taking case of letter into account', () => {
    const J = 'abc';
    const S = 'bobCAT';
    expect(numJewelsAndStones(J, S)).toEqual(2);
  });
});
