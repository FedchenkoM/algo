//https://leetcode.com/problems/sqrtx/


/** First solution
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  if (x == 2) return 1;
  for (let i = 1; i <= Math.ceil((x / 2)); i++) {
    if (i * i == x) return i
    if (i * i > x) return i - 1;
  }
};


/** Second solution
 * @param {number} x
 * @return {number}
 */
var mySqrt2 = function (x) {
  let ds, de;

  for (let i = 0; i <= Math.ceil((x / 2)); i += 10) {
    if (i * i > x) {
      ds = i - 10;
      de = i;
      break;
    }
  }

  if (!ds && !de) ds = 0, de = 10;

  for (let i = ds; i <= de; i++) {
    if (i * i > x) {
      return --i;
    }
  }
};

