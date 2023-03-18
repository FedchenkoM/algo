// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const nums = [-3, -1, 0, 0, 0, 3, 3];
const nums1 = [1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 55, 55];

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let i = 0;
    for (let k = 0; k < nums.length; ) {
        if (nums[i] !== nums[k]) {
            i++;
            nums[i] = nums[k];
        }
        k++;
    }

    return ++i;
};
