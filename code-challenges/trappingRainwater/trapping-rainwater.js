'use strict';

// MY RECURSIVE SOLUTION, NOT VERY EFFICIENT

// const trap = height => {
//   if (height.length < 3) return 0;

//   let minfill = 0;
//   let sum = 0;
//   let startIdx = 0;
//   let endIdx = height.length - 1;

//   while (height[startIdx] <= minfill && startIdx < endIdx) {
//     startIdx++;
//   }

//   while (height[endIdx] <= minfill && startIdx < endIdx) {
//     endIdx--;
//   }

//   return trapHelper(startIdx, endIdx, sum, minfill, height);
// };

// const trapHelper = (startIdx, endIdx, sum, minfill, height) => {
//   if (startIdx === endIdx) return sum;

//   minfill =
//     Math.max(height[startIdx], height[endIdx]) -
//     Math.abs(height[startIdx] - height[endIdx]);

//   for (let i = startIdx; i < endIdx; i++) {
//     if (minfill - height[i] > 0) {
//       sum += minfill - height[i];
//       height[i] = minfill;
//     }
//   }

//   if (height[startIdx] === height[endIdx]) {
//     while (height[startIdx] <= minfill && startIdx < endIdx) {
//       startIdx++;
//     }
//     while (height[endIdx] <= minfill && startIdx < endIdx) {
//       endIdx--;
//     }
//   }

//   if (height[startIdx] > height[endIdx]) {
//     while (height[endIdx] <= minfill && startIdx < endIdx) {
//       endIdx--;
//     }
//   }

//   if (height[startIdx] < height[endIdx]) {
//     while (height[startIdx] <= minfill && startIdx < endIdx) {
//       startIdx++;
//     }
//   }

//   return trapHelper(startIdx, endIdx, sum, minfill, height);
// };

// BETTER SOLUTION FOUND ON LEETCODE

function trap(height) {
  let leftMaxArray = [];
  let rightMaxArray = [];

  let leftMax = 0;
  let rightMax = 0;

  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(height[i], leftMax);
    leftMaxArray.push(leftMax);

    rightMax = Math.max(height[height.length - 1 - i], rightMax);
    rightMaxArray.unshift(rightMax);
  }

  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    let waterTrapped = Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i];
    sum = sum + waterTrapped;
  }

  return sum;
}

module.exports = trap;
