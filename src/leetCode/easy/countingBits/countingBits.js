// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const ans = [0];

    for (let i = 1; i <= n; i++) {
        let bits = 0;
        let j = i;

        while (j) {
            bits++;
            j -= 2 ** Math.floor(Math.log2(j));
        }

        ans.push(bits);
    }

    return ans;
};

module.exports = countBits;
