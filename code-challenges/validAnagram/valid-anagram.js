'use strict';

// MY SOLUTION, USING HASH MAPS
const isAnagram = (s, t) => {
  if (typeof s !== 'string' || typeof t !== 'string') return false;
  if (s.length !== t.length) return false;

  let answer = true;
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);
    if (sMap.has(current)) {
      let value = sMap.get(current);
      value++;
      sMap.set(current, value);
    } else {
      sMap.set(current, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    let current = t.charAt(i);
    if (tMap.has(current)) {
      let value = tMap.get(current);
      value++;
      tMap.set(current, value);
    } else {
      tMap.set(current, 1);
    }
  }

  for (let [key, value] of sMap) {
    if (value !== tMap.get(key)) {
      answer = false;
    }
  }

  return answer;
};

// ANOTHER LEETCODE SOLUTION, USING CHARCODEAT
// var isAnagram = function(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   var arr = new Array(255).fill(0);
//   for (let i = 0; i < s.length; i++) {
//     arr[s.charCodeAt(i)]++;
//   }

//   for (let i = 0; i < t.length; i++) {
//     arr[t.charCodeAt(i)]--;
//   }

//   for (let i = 0; i < 255; i++) {
//     if (arr[i] !== 0) return false;
//   }
//   return true;
// };

// ANOTHER LEETCODE SOLUTION, USING BUILT-IN FUNCTIONALITY
// const isAnagram = (s, t) => {
//   if (typeof s !== 'string' || typeof t !== 'string') return false;
//   if (s.length !== t.length) return false;
//   return [...s].sort().join('') === [...t].sort().join('');
// };

module.exports = isAnagram;
