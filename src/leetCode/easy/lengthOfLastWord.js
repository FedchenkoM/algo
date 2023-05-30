// https://leetcode.com/problems/length-of-last-word/

const s = 'dodo pizza    ';
const s2 = 'dodo';
const s3 = '';

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    for (let i = (k = s.length - 1); i >= 0; i--, k--) {
        if (s[i] !== ' ') {
            while (s[k] !== ' ' && k > -1) {
                k--;
            }
            return i - k;
        }
    }

    return 0;
};
