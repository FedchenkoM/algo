// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += nums[i - 1] || 0;
    }

    return nums;
};
