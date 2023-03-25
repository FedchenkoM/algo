// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let mask = 0;

    for (let i = 0; i < nums.length; i++) {
        mask ^= nums[i];
    }

    return mask;
};

module.exports = singleNumber;
