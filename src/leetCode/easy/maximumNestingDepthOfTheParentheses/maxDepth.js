// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
    let max = 0;
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            depth--;
        } else if (s[i] === '(') {
            depth++;
            max = Math.max(depth, max);
        }
    }

    return max;
};
