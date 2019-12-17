/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

const rand10 = function() {
  let row = null;
  let column = null;
  let index = null;
  do {
    row = rand7();
    column = rand7();
    index = column + (row - 1) * 7;
  } while (index > 40);
  return 1 + (index - 1) % 10;
};
