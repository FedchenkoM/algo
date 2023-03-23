// https://leetcode.com/problems/search-insert-position/

const nums = [1, 3, 5, 6, 7, 8, 9, 10, 12];
const target = 11;
const nums2 = [1, 3, 4, 6, 7, 8, 9, 10, 12];
const target2 = -1;
const nums3 = [1, 3, 5, 6, 8, 9, 10, 12];
const target3 = 14;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if (nums[0] > target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor((r + l) / 2);

    while (l !== m && r !== m) {
        if (nums[m] > target) {
            r = m;
            m = Math.floor((r + l) / 2);
        } else if (nums[m] < target) {
            l = m;
            m = Math.floor((r + l) / 2);
        } else return m;
    }

    if (nums[m] < target) return r;
    return l;
};
