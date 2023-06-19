/* eslint-disable no-return-assign */
// https://leetcode.com/problems/rank-transform-of-an-array/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function (arr) {
    const sorted = [...arr].sort((a, b) => a - b);

    const sortedMap = new Map();

    for (let i = 0, c = 1; i < sorted.length; i++) {
        if (sortedMap.has(sorted[i])) continue;
        sortedMap.set(sorted[i], c);
        c++;
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(sortedMap.get(arr[i]));
    }

    return result;
};
