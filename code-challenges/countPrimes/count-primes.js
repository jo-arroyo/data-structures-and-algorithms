'use strict';

// Sieve of Eratosthenes
const countPrimes = n => {
  let numArray = [];
  if (n < 3) {
    return 0;
  }
  for (let i = 0; i < n; i++) {
    numArray.push(true);
  }
  let limit = Math.sqrt(n);
  for (let i = 2; i < limit; i++) {
    if (numArray[i] === true) {
      for (let j = i; i * j < n; j++) {
        numArray[i * j] = false;
      }
    }
  }
  let counter = 0;
  for (let i = 2; i < numArray.length; i++) {
    if (numArray[i]) counter++;
  }
  return counter;
};

// My brute force solution, works but takes too long, O(n2) time
const countPrimesWrong = n => {
  let count = 0;
  if (n < 3) {
    return count;
  }
  for (let i = 2; i < n; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
      }
    }
    if (prime === true) {
      count++;
    }
  }
  return count;
};

module.exports = countPrimes;
