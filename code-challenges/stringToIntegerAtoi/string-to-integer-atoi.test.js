const atoi = require('./string-to-integer-atoi');

describe('String to Integer Atoi', () => {
  test('Empty string', () => {
    let test = '';
    expect(atoi(test)).toEqual(0);
  });

  test('String of spaces', () => {
    let test = '';
    expect(atoi(test)).toEqual(0);
  });

  test('0', () => {
    let test = '0';
    expect(atoi(test)).toEqual(0);
  });

  test('12', () => {
    let test = '12';
    expect(atoi(test)).toEqual(12);
  });

  test('-37', () => {
    let test = '-37';
    expect(atoi(test)).toEqual(-37);
  });

  test('+46', () => {
    let test = '+46';
    expect(atoi(test)).toEqual(46);
  });

  test('+-2', () => {
    let test = '+-2';
    expect(atoi(test)).toEqual(0);
  });

  test('   97', () => {
    let test = '   97';
    expect(atoi(test)).toEqual(97);
  });

  test('   12 one', () => {
    let test = '   12 one';
    expect(atoi(test)).toEqual(12);
  });

  test('   two', () => {
    let test = '   two';
    expect(atoi(test)).toEqual(0);
  });

  test('two words 37', () => {
    let test = 'two words 37';
    expect(atoi(test)).toEqual(0);
  });

  test('27 12', () => {
    let test = '27 12';
    expect(atoi(test)).toEqual(27);
  });

  test('Checks if out of range', () => {
    let test = '-91283472332';
    expect(atoi(test)).toEqual(-2147483648);
  });

  test('Decimals', () => {
    let test = '3.14159';
    expect(atoi(test)).toEqual(3);
  });

  test('Lots of zeros', () => {
    let test = '  0000000000012345678';
    expect(atoi(test)).toEqual(12345678);
  });

  test('With a random letter', () => {
    let test = '  -0012a42';
    expect(atoi(test)).toEqual(-12);
  });
});
