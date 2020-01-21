'use strict';

const threeSum = nums => {
  let final = [];
  if (!Array.isArray(nums) || nums.length < 3) return final;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        let triplet = [nums[i], nums[left], nums[right]];
        let sorted = triplet.sort((a, b) => a - b);
        final.push(sorted);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }

  return final;
};

// MY SOLUTION THAT ALMOST WORKS BUT NOT QUITE
// const threeSum = nums => {
// let tripletObj = {};
// // put all numbers into a hash map
// let map = new Map();
// for (let i = 0; i < nums.length; i++) {
//   map.set(nums[i], i);
// }

// nums = nums.sort();
// // a loop
// for (let i = 0; i < nums.length - 2; i++) {
//   let a = nums[i];

//   // b loop
//   for (let j = i + 1; j < nums.length - 1; j++) {
//     let b = nums[j];
//     let c = -(a + b);

//     // c lookup
//     if (map.has(c) && a !== c && b !== c && c !== -0) {
//       let triplet = [a, b, c];
//       let sortedTriplet = triplet.sort();

//       if (!tripletObj[sortedTriplet]) {
//         tripletObj[sortedTriplet] = 1;
//         final.push(sortedTriplet);
//       }
//     }
//   }
// }
// return final;

module.exports = threeSum;
