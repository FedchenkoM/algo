// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    const set = new Set();

    while (n !== 1) {
        const num = String(n)
            .split('')
            .reduce((acc, n) => acc + n ** 2, 0);

        if (set.has(num)) return false;

        n = num;

        set.add(n);
    }
    return true;
};
