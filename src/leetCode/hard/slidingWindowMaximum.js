// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
    const result = [];
    const dq = [];

    let l = 0;
    let r = 0;

    while (r < nums.length) {
        while (dq.length && nums[r] > dq[dq.length - 1]) {
            dq.pop();
        }
        dq.push(nums[r]);

        if (r - l + 1 === k) {
            result.push(dq[0]);
            if (dq[0] === nums[l]) {
                dq.shift();
            }
            l++;
        }

        r++;
    }

    return result;
};
