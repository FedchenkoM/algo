// https://leetcode.com/problems/squares-of-a-sorted-array/

const nums = [-4, -1, 0, 3, 10];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    const result = [];

    for (let l = 0, r = nums.length - 1; l <= r; ) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[r - l] = nums[l] ** 2;
            l++;
        } else {
            result[r - l] = nums[r] ** 2;
            r--;
        }
    }
    return result;
};
