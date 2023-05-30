// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (o) {
    let res = 0;

    for (let i = 0; i < o.length; i++) {
        if (o[i][1] === '+') {
            res++;
        } else {
            res--;
        }
    }

    return res;
};
