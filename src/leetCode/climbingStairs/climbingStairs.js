// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let j = 1;
  let k = 1;
  for (let i = 1; i < n; i++) {
    const b = j;
    j += k;
    k = b;
  }
  return j;
};
