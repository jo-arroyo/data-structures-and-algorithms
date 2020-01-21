const intToRoman = require('./int-to-roman');

describe('Integer to Roman Numeral', () => {
  test('String', () => {
    let test = 'a';
    expect(intToRoman(test)).toEqual(false);
  });

  test('One', () => {
    let test = 1;
    expect(intToRoman(test)).toEqual('I');
  });

  test('Three', () => {
    let test = 3;
    expect(intToRoman(test)).toEqual('III');
  });

  test('Four', () => {
    let test = 4;
    expect(intToRoman(test)).toEqual('IV');
  });

  test('Nine', () => {
    let test = 9;
    expect(intToRoman(test)).toEqual('IX');
  });

  test('58', () => {
    let test = 58;
    expect(intToRoman(test)).toEqual('LVIII');
  });

  test('1994', () => {
    let test = 1994;
    expect(intToRoman(test)).toEqual('MCMXCIV');
  });
});
