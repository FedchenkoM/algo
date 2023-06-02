// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = function(nums) {
  const set = new Set();
  
  for(let i = 0; i < nums.length; i++){

      if(set.has(nums[i])) return nums[i];

      set.add(nums[i]);
  }
};