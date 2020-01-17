'use strict';

const checkPossibility = nums => {
  if (nums.length === 0 || !Array.isArray(nums)) return false;
  if (nums.length === 1) return true;

  let count = 0;

  for (let i = 0; i < nums.length - 1 && count <= 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;

      if (i > 0 && nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }

  return count <= 1;
};

module.exports = checkPossibility;
