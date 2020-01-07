const isHappy = require('./happy-number');

describe('Happy number', () => {
  it('Returns false if input is not a number', () => {
    let n = 'a';
    expect(isHappy(n)).toEqual(false);
  });

  it('Returns true if it is a happy number', () => {
    let n = 19;
    expect(isHappy(n)).toEqual(true);
  });

  it('Returns false if input is not a happy number', () => {
    let n = 20;
    expect(isHappy(n)).toEqual(false);
  });
});