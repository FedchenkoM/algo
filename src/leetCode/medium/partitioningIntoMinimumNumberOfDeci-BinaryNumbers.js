// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = function (n) {
    let min = '0';

    for (let i = 0; i < n.length; i++) {
        if (n.charCodeAt(i) > min.charCodeAt(0)) {
            min = n[i].toString();
        }
    }

    return +min;
};
