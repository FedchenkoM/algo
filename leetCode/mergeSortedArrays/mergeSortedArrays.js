//https://leetcode.com/problems/merge-sorted-array/

const nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3
// const nums1 = [1], m = 1, nums2 = [], n = 0

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1

  while (i > -1 && j > -1) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--;
    } else {
      nums1[k] = nums2[j]
      j--;
    }
    k--;
  }

  while (j > -1) {
    nums1[k] = nums2[j];
    k--; j--;
  }

  while (i > -1) {
    nums1[k] = nums1[i];
    k--; i--;
  }

};


console.log(merge(nums1, m, nums2, n));