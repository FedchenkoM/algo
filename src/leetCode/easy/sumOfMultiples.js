// https://leetcode.com/problems/sum-multiples/

/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = function (n) {
    let result = 0;
    for (let i = 3; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) {
            result += i;
        }
    }

    return result;
};
