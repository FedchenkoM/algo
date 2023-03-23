// https://leetcode.com/problems/remove-element/

const nums = [-3, -1, 0, 0, 0, 3, 3];
const nums1 = [1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 55, 55];

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let i = 0;
    for (let k = 0; k < nums.length; ) {
        if (nums[k] !== val) {
            nums[i] = nums[k];
            i++;
        }
        k++;
    }

    return i;
};
