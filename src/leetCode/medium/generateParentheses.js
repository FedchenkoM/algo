// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const res = [];

    const iterate = (str, open, close) => {
        if (open > n || close > n || close > open) return;
        if (str.length == n * 2 && open == close) {
            res.push(str);
            return;
        }
        iterate(`${str}(`, open + 1, close);
        iterate(`${str})`, open, close + 1);
    };

    iterate('', 0, 0);
    return res;
};
