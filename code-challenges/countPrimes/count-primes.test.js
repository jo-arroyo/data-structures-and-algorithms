const countPrimes = require('./count-primes');

describe('Count Primes', () => {
  it('Returns 0 when n is less than 3', () => {
    let n = 1;
    let n2 = 2;
    expect(countPrimes(n)).toEqual(0);
    expect(countPrimes(n2)).toEqual(0);
  });

  it('Returns the number of primes', () => {
    let n = 10;
    expect(countPrimes(n)).toEqual(4);
  });
});
