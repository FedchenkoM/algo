// https://leetcode.com/problems/sort-array-by-parity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
    const even = [];
    const neven = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            even.push(nums[i]);
        } else {
            neven.push(nums[i]);
        }
    }

    return [...even, ...neven];
};

/// ///
const sortArrayByParity2 = function (nums) {
    const result = Array(nums.length);

    for (let e = 0, n = nums.length - 1, i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            result[e] = nums[i];
            e++;
        } else {
            result[n] = nums[i];
            n--;
        }
    }

    return result;
};
