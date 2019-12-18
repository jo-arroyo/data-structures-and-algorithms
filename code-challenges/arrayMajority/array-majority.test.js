const majorityElement = require('./array-majority');

describe('Find majority element in array', () => {
  it('returns number if only one number in array', () => {
    const testArray = [1];
    expect(majorityElement(testArray)).toEqual(1);
  });

  it('finds majority in small array', () => {
    const testArray = [3, 2, 3];
    expect(majorityElement(testArray)).toEqual(3);
  });

  it('majority in first half of array', () => {
    const testArray = [1, 1, 3];
    expect(majorityElement(testArray)).toEqual(1);
  });

  it('finds majority in medium array', () => {
    const testArray = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(testArray)).toEqual(2);
  });

  it('finds majority where elements are letters', () => {
    const testArray = ['a', 'b', 'b'];
    expect(majorityElement(testArray)).toEqual('b');
  });
});
