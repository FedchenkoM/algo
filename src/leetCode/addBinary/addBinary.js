// https://leetcode.com/problems/add-binary/

const a = '1111';
const b = '1111';
const a2 = '11110';
const b2 = '1111';

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    const r = [];
    let buf = 0;

    for (let k = a.length - 1, j = b.length - 1; k > -1, j > -1; k--, j--) {
        const s = (+a[k] || 0) + (+b[j] || 0) + buf;

        if (s == 2) {
            r.push(0);
            buf = 1;
        } else if (s == 3) {
            r.push(1);
            buf = 1;
        } else {
            r.push(s);
            buf = 0;
        }
    }
    if (buf) r.push(buf);
    return r.reverse().join('');
};

// Easy solution from leetcode
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary2 = (a, b) => (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2);
