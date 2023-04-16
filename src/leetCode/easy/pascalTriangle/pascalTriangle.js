// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    const result = [[1]];
    let cur = [];

    for (let i = 1; i < numRows; i++) {
        for (let j = 0; j <= i; j++) {
            cur.push((result[i - 1][j] ?? 0) + (result[i - 1][j - 1] ?? 0));
        }
        result.push(cur);
        cur = [];
    }

    return result;
};

module.exports = generate;
