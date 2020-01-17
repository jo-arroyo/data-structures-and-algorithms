const checkPossibility = require('./non-decreasing-array');

describe('Non-decreasing Array Possibility', () => {
  test('Returns false for empty array', () => {
    let test = [];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Returns false for not an array', () => {
    let test = 1;
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Returns true for array with only 1 element', () => {
    let test = [1];
    expect(checkPossibility(test)).toEqual(true);
  });

  test('Returns true for non-decreasing array', () => {
    let test = [1, 2, 3];
    expect(checkPossibility(test)).toEqual(true);
  });

  test('Returns false for decreasing array', () => {
    let test = [4, 3, 2];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Returns true for array that only requires one change', () => {
    let test = [1, 3, 2];
    expect(checkPossibility(test)).toEqual(true);
  });

  test('Returns false for array that requires more than one change', () => {
    let test = [10, 2, 3, 7, 5];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Works for negative numbers', () => {
    let test = [1, 5, -1, 2, 4];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Works where some numbers are equal', () => {
    let test = [2, 3, 3, 2, 4];
    expect(checkPossibility(test)).toEqual(true);
  });

  test('Works on long array with repeating numbers', () => {
    let test = [1, 5, 4, 6, 7, 10, 10, 8, 9];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Works on arrays with multiple repeats', () => {
    let test = [3, 3, 2, 2];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Works on arrays with multiple repeats', () => {
    let test = [3, 3, 2, 3, 2, 2];
    expect(checkPossibility(test)).toEqual(false);
  });

  test('Works on arrays with multiple repeats', () => {
    let test = [1, 2, 5, 3, 3];
    expect(checkPossibility(test)).toEqual(true);
  });

  test('Works on arrays with multiple repeats', () => {
    let test = [1, 2, 4, 5, 3];
    expect(checkPossibility(test)).toEqual(true);
  });
});
