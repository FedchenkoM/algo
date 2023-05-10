// https://leetcode.com/problems/shortest-distance-to-a-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
    const result = [];

    for (let i = 0, k = 0; k < s.length; ) {
        if (c == s[k]) {
            while (i <= k) {
                result.push(k - i);
                i++;
            }
        }
        k++;
    }

    for (let i = s.length - 1, k = s.length - 1; k > -1; ) {
        if (c == s[k]) {
            while (i >= k) {
                result[i] = Math.min(i - k, result[i] || Infinity);
                i--;
            }
        }
        k--;
    }

    return result;
};
