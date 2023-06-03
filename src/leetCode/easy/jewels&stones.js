// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
    const set = new Set(jewels);
    let result = 0;

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) result++;
    }

    return result;
};
