const romanToInteger = require('./roman-to-integer');

describe('Function to convert Roman Numeral to Integer', () => {
  it('returns error message if input is not a string', () => {
    const test = 123;
    expect(romanToInteger(test)).toEqual('Invalid input!');
  });

  it('returns integer with simple roman numerals', () => {
    const test = 'III';
    expect(romanToInteger(test)).toEqual(3);
  });

  it('returns integer when subtraction is involved', () => {
    const test = 'IX';
    expect(romanToInteger(test)).toEqual(9);
  });

  it('returns integer with complex roman numerals', () => {
    const test = 'MCMXCIV';
    expect(romanToInteger(test)).toEqual(1994);
  });
});
