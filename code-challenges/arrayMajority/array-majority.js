'use strict';

const majorityElement = (nums) => {
  if(nums.length === 1){
    return nums[0];
  }
  const stored = new Map();
  for (let i = 0; i < nums.length; i++){    
    let value = nums[i];
    if(stored.has(value)){
      let current = stored.get(value);
      current++;
      if(current > nums.length / 2){
        return value;
      } else {
        stored.set(value, current);
      }
    } else {
      stored.set(value, 1);
    }
  }
};

module.exports = majorityElement;
