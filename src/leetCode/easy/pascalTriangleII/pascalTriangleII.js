// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    let prev = [[1]];
    let cur = [];

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = 0; j <= i; j++) {
            cur.push((prev[0][j] ?? 0) + (prev[0][j - 1] ?? 0));
        }
        prev = [cur];
        cur = [];
    }

    return prev[0];
};

module.exports = getRow;
