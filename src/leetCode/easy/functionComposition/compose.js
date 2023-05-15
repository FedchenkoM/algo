// https://leetcode.com/problems/function-composition/description/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
    return function (x) {
        let res = x;
        for (let i = functions.length - 1; i > -1; i--) {
            res = functions[i](res);
        }
        return res;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
