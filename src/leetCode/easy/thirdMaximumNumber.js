// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    let m1 = -Infinity;
    let m2 = -Infinity;
    let m3 = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            m3 = m2;
            m2 = m1;
            m1 = nums[i];
        } else if (nums[i] > m2 && nums[i] !== m1) {
            m3 = m2;
            m2 = nums[i];
        } else if (nums[i] > m3 && nums[i] !== m1 && nums[i] !== m2) {
            m3 = nums[i];
        }
    }
    return m3 === -Infinity ? m1 : m3;
};
