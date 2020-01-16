const trap = require('./trapping-rainwater');

describe('Trapping rainwater', () => {
  test('Works', () => {
    let test = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(trap(test)).toEqual(6);
  });

  test('Array of zeros', () => {
    let test = [0, 0, 0, 0, 0];
    expect(trap(test)).toEqual(0);
  });

  test('Array of ones', () => {
    let test = [1, 1, 1, 1, 1];
    expect(trap(test)).toEqual(0);
  });

  test('Empty array', () => {
    let test = [];
    expect(trap(test)).toEqual(0);
  });

  test('Array with two elements', () => {
    let test = [1, 2];
    expect(trap(test)).toEqual(0);
  });
});
