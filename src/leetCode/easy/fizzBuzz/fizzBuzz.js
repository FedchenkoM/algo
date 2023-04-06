// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    const r = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            r.push('FizzBuzz');
            continue;
        } else if (i % 3 === 0) {
            r.push('Fizz');
            continue;
        } else if (i % 5 === 0) {
            r.push('Buzz');
            continue;
        }
        r.push(i.toString());
    }

    return r;
};

module.exports = fizzBuzz;
