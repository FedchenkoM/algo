// https://leetcode.com/problems/majority-element/

// O(n*logn)
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    return nums.sort((a, b) => b - a)[Math.floor(nums.length / 2)];
};

// Boyer-Moore majority vote algorithm O(n)
const majorityElement2 = function (nums) {
    let candidate;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += num === candidate ? 1 : -1;
    }

    return candidate;
};
