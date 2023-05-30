// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
    }

    return s;
};

const reverseString2 = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        const buffer = s[s.length - i - 1];
        s[s.length - i - 1] = s[i];
        s[i] = buffer;
    }

    return s;
};

module.exports = { reverseString, reverseString2 };
