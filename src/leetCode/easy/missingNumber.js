// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    const set = new Set(nums);
    for (let i = 0; i <= set.size; i++) {
        if (!set.has(i)) return i;
    }
};

// Math
const missingNumber2 = function (nums) {
    let sum = 0;
    const n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return (n * (n + 1)) / 2 - sum;
};
