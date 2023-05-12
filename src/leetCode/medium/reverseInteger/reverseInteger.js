// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let ans = 0;
    const isPositive = x > 0;

    if (!isPositive) x = Math.abs(x);

    while (x >= 1) {
        const a = x % 10;
        ans = ans * 10 + a;
        x = Math.floor(x / 10);
    }

    if (isPositive) return ans > 2 ** 31 - 1 ? 0 : ans;

    return -ans < -(2 ** 31) ? 0 : -ans;
};
