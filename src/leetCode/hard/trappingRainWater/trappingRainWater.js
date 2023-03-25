// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    const max = height.indexOf(Math.max(...height));
    let curMax = height[0];
    let result = 0;

    for (let i = 0; i < max; i++) {
        if (curMax - height[i] < 0) {
            curMax = height[i];
            continue;
        }
        result += curMax - height[i];
    }

    curMax = 0;

    for (let i = height.length - 1; i > max; i--) {
        if (curMax - height[i] < 0) {
            curMax = height[i];
            continue;
        }
        result += curMax - height[i];
    }

    return result;
};

module.exports = trap;
