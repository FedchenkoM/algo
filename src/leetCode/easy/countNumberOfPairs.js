// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = function (nums, k) {
    const map = new Map();

    for (const i of nums) {
        // eslint-disable-next-line no-unused-expressions
        map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
    }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] - k)) count += map.get(nums[i] - k);
    }

    return count;
};
