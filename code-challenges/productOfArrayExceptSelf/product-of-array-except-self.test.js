const productExceptSelf = require('./product-of-array-except-self');

describe('Three Sum', () => {
  test('Input is not an array', () => {
    let test = 'a';
    expect(productExceptSelf(test)).toEqual([]);
  });

  test('Empty array', () => {
    let test = [];
    expect(productExceptSelf(test)).toEqual([]);
  });

  test('Array with two items', () => {
    let test = [1, 2];
    expect(productExceptSelf(test)).toEqual([2, 1]);
  });

  test.only('Array with four items', () => {
    let test = [1, 2, 3, 4];
    expect(productExceptSelf(test)).toEqual([24, 12, 8, 6]);
  });

  test('Array with one zero at start', () => {
    let test = [0, 4, 5];
    expect(productExceptSelf(test)).toEqual([20, 0, 0]);
  });

  test('Array with one zero at end', () => {
    let test = [5, 4, 0];
    expect(productExceptSelf(test)).toEqual([0, 0, 20]);
  });

  test('Array with two zeros', () => {
    let test = [0, 4, 0];
    expect(productExceptSelf(test)).toEqual([0, 0, 0]);
  });
});
