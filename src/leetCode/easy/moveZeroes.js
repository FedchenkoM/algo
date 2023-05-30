// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    for (let i = 0, k = 0; i < nums.length && k < nums.length; ) {
        if (nums[i] == 0) {
            for (let f = k; f < nums.length; ) {
                if (nums[f] !== 0 && f > i) {
                    nums[i] = nums[f];
                    nums[f] = 0;
                    k = f;
                    break;
                }
                f++;
            }
        }
        i++;
    }
    return nums;
};
