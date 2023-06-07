// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const merged = [];
    const sumLength = nums1.length + nums2.length;

    if (sumLength === 1) {
        merged.push(...nums1, ...nums2);
        return merged[0].toFixed(5);
    }

    if (sumLength === 2) {
        merged.push(...nums1, ...nums2);
        return ((merged[0] + merged[1]) / 2).toFixed(5);
    }

    let mid;

    if (sumLength % 2 === 0) {
        mid = sumLength / 2;
    } else {
        mid = Math.floor(sumLength / 2);
    }

    for (let f = 0, s = 0; f + s <= mid; ) {
        if (nums1[f] !== undefined && nums2[s] !== undefined) {
            if (nums1[f] > nums2[s]) {
                merged.push(nums2[s]);
                s++;
            } else if (nums1[f] < nums2[s]) {
                merged.push(nums1[f]);
                f++;
            } else {
                merged.push(nums1[f], nums2[s]);
                f++;
                s++;
            }
        } else if (nums1[f] !== undefined) {
            merged.push(nums1[f]);
            f++;
        } else {
            merged.push(nums2[s]);
            s++;
        }
    }

    if (sumLength % 2 === 0) {
        return ((merged[mid] + merged[mid - 1]) / 2).toFixed(5);
    }

    return merged[mid].toFixed(5);
};
