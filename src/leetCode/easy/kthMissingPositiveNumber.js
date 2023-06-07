// https://leetcode.com/problems/kth-missing-positive-number/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    for (let i = 0, j = 1; i < arr.length + k; ) {
        if (arr[i] !== j) {
            if (j - i === k) return j;
            j++;
            continue;
        }
        i++;
        j++;
    }
};
