// https://leetcode.com/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    const bx = x.toString(2);
    const by = y.toString(2);

    let result = 0;

    for (
        let ix = bx.length - 1, iy = by.length - 1;
        ix > -1 || iy > -1;
        ix--, iy--
    ) {
        if ((bx[ix] ^ by[iy]) === 1) result++;
    }

    return result;
};
