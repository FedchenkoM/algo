// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
    const b = { L: 0, R: 0 };
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        b[s[i]]++;
        if (b.R === b.L) {
            count++;
            b.L = 0;
            b.R = 0;
        }
    }

    return count;
};
