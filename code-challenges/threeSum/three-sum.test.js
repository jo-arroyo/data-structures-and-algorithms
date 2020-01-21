const threeSum = require('./three-sum');

describe('Three Sum', () => {
  test('Input is not an array', () => {
    let test = 'a';
    expect(threeSum(test)).toEqual([]);
  });

  test('Empty array', () => {
    let test = [];
    expect(threeSum(test)).toEqual([]);
  });

  test('Array not long enough', () => {
    let test = [1, 2];
    expect(threeSum(test)).toEqual([]);
  });

  test('Test array', () => {
    let test = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(test)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1]
    ]);
  });

  test('Array of zeros', () => {
    let test = [0, 0, 0];
    expect(threeSum(test)).toEqual([[0, 0, 0]]);
  });

  test('Arrays', () => {
    let test = [3, 0, -2, -1, 1, 2];
    expect(threeSum(test)).toEqual([
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1]
    ]);
  });
});
