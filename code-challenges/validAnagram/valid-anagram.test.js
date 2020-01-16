const isAnagram = require('./valid-anagram');

describe('Valid Anagram', () => {
  test('Checks if is string', () => {
    let s = 'a';
    let t = 1;
    expect(isAnagram(s, t)).toEqual(false);
  });

  test('Checks if string is empty', () => {
    let s = 'a';
    let t = '';
    expect(isAnagram(s, t)).toEqual(false);
  });

  test('Returns true for two empty strings', () => {
    let s = '';
    let t = '';
    expect(isAnagram(s, t)).toEqual(true);
  });

  test('Works on short anagrams', () => {
    let s = 'cat';
    let t = 'act';
    expect(isAnagram(s, t)).toEqual(true);
  });

  test('Works on longer anagrams', () => {
    let s = 'cattle';
    let t = 'tatcle';
    expect(isAnagram(s, t)).toEqual(true);
  });

  test('Fails if not anagrams', () => {
    let s = 'act';
    let t = 'nat';
    expect(isAnagram(s, t)).toEqual(false);
  });

  test('Works for spaces', () => {
    let s = 'i had';
    let t = 'had i';
    expect(isAnagram(s, t)).toEqual(true);
  });

  test('Returns false for strings of different lengths', () => {
    let s = 'a';
    let t = 'ab';
    expect(isAnagram(s, t)).toEqual(false);
  });

  test('works', () => {
    let s = 'aacc';
    let t = 'ccac';
    expect(isAnagram(s, t)).toEqual(false);
  });
});
