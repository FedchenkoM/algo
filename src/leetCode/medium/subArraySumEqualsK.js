// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
    if (nums.length === 1) {
        if (nums[0] === k) return 1;
        return 0;
    }

    const map = new Map();

    map.set(0, 1);

    let result = 0;

    let sum = 0;

    for (const n of nums) {
        sum += n;

        if (map.has(sum - k)) {
            result += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return result;
};
