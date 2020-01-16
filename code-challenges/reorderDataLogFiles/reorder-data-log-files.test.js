const reorder = require('./reorder-data-log-files');

describe('Reorder Data in Log Files', () => {
  test('Returns error if not array', () => {
    let logs = 123;
    expect(reorder(logs)).toEqual('ERROR');
  });

  test('Reorders alpha and digit', () => {
    let logs = ['dig1 2 4 6', 'al2 cat hat', 'al5 cat mat', 'dig2 1 3 5'];
    expect(reorder(logs)).toEqual([
      'al2 cat hat',
      'al5 cat mat',
      'dig1 2 4 6',
      'dig2 1 3 5'
    ]);
  });

  test('Reorders alpha and digit, retains original digit order', () => {
    let logs = ['dig2 1 1 1', 'al2 cat hat', 'al5 cat mat', 'dig1 2 2 2', 'al7 big rat'];
    expect(reorder(logs)).toEqual([
      'al7 big rat',
      'al2 cat hat',
      'al5 cat mat',
      'dig2 1 1 1',
      'dig1 2 2 2'
    ]);
  });

  test('Reorders alpha and digit, where part of alpha is the same', () => {
    let logs = ['dig2 1 1 1', 'al5 hoo hoo', 'al2 hoo hoo', 'dig1 2 2 2', 'al8 hoo hoo'];
    expect(reorder(logs)).toEqual([
      'al2 hoo hoo',
      'al5 hoo hoo',
      'al8 hoo hoo',
      'dig2 1 1 1',
      'dig1 2 2 2'
    ]);
  });
});
