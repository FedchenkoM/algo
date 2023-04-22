// https://leetcode.com/problems/container-with-most-water/

// O(n^2)
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let max = Math.max(height[0], height[1]);

    for (let i = 0; i < height.length; i++) {
        for (let k = i + 1; k < height.length; k++) {
            if (Math.min(height[i], height[k]) * (k - i) > max) {
                max = Math.min(height[i], height[k]) * (k - i);
            }
        }
    }

    return max;
};

// O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea2 = function (height) {
    let left = 0;
    let right = height.length - 1;

    let max = Math.min(height[left], height[right]) * 1;

    while (left < right) {
        max = Math.max(
            max,
            Math.min(height[left], height[right]) * (right - left),
        );

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

module.exports = { maxArea, maxArea2 };
