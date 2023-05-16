// https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
    let result = 0;
    const l = mat.length;

    for (let r = 0; r < l; r++) {
        for (let c = 0; c < l; c++) {
            if (r == c) {
                result += mat[r][c] + mat[r][l - c - 1];

                break;
            }
        }
    }
    return l % 2 == 0
        ? result
        : result - mat[Math.floor(l / 2)][Math.floor(l / 2)];
};
