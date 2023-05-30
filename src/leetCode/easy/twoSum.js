// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (`${nums[i]}` in map) return [i, map[`${nums[i]}`]];
        map[`${target - nums[i]}`] = i;
    }
};
