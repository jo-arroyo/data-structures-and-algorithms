'use strict';

const productExceptSelf = nums => {
  if (!Array.isArray(nums || nums.length < 1)) return [];

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (left.length === 0) {
      left.push(1);
    } else {
      left.push(left[i - 1] * nums[i - 1]);
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (right.length === 0) {
      right.push(1);
    } else {
      right.unshift(right[0] * nums[i + 1]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};

// LEETCODE ANSWER - O(n) Time, O(1) Space
// var productExceptSelf = function(nums) {
//   var n = nums.length;
//   var output = new Array(n);
//   output[0] = 1;
//   for (var i = 1; i < n; i++) {
//     output[i] = output[i - 1] * nums[i - 1];
//   }
//   var r = 1;
//   for (var j = n - 1; j >= 0; j--) {
//     output[j] = output[j] * r;
//     r *= nums[j];
//   }
//   return output;
// };

module.exports = productExceptSelf;
