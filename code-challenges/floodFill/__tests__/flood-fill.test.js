const floodFill = require('../flood-fill');

describe('Flood fill function', () => {
  test('1x1', () => {
    const image = [[1]];
    expect(floodFill(image, 0, 0, 2)).toEqual([[2]]);
  });

  test('3x3', () => {
    const image = [[1,1,1],[1,1,0],[1,0,1]];
    expect(floodFill(image, 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
  });

  test('3x3 with no connected colors', () => {
    const image = [[1,1,1],[1,2,1],[1,1,1]];
    expect(floodFill(image, 1, 1, 3)).toEqual([[1,1,1],[1,3,1],[1,1,1]]);
  });

  test('4x4', () => {
    const image = [[2, 3, 2, 1], [2, 2, 2, 3], [1, 2, 3, 2], [0, 2, 1, 3]];
    expect(floodFill(image, 2, 1, 4)).toEqual([[4, 3, 4, 1], [4, 4, 4, 3], [1, 4, 3, 2], [0, 4, 1, 3]]);
  });
});
