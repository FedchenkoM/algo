// https://leetcode.com/problems/power-of-two/

const isPowerOfTwo = function (n) {
    if (n == 0) return 0;
    while (n != 1) {
        if (n % 2 != 0) return 0;
        n /= 2;
    }
    return 1;
};

/// //////////////////////////
const isPowerOfTwo2 = function (n) {
    if (n <= 0) return false;
    const bN = n.toString(2);

    let bits = 0;

    for (let i = 0; i < bN.length; i++) {
        if (bN[i] === '1') {
            bits++;
            if (bits > 1) return false;
        }
    }

    return bits === 1;
};
