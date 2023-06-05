/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = function (n) {
    if (n === 1) return 1;

    let ls = 0;
    let rs = n;

    for (let l = 1, r = n; l <= r; l++) {
        ls += l;
        if (ls === rs && l + 1 === r - 1) return l + 1;
        if (ls > rs) {
            r--;
            rs += r;
        }
    }

    return -1;
};
