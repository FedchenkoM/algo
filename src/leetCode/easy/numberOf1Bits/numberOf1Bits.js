// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let res = 0;

    while (n) {
        res++;
        n -= 2 ** Math.floor(Math.log2(n));
    }

    return res;
};

module.exports = hammingWeight;
