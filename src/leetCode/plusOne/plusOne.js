//https://leetcode.com/problems/plus-one/

const digits = [4, 3, 2, 1];
const digits2 = [1, 2, 3];
const digits3 = [9];
const digits4 = [9, 9];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let b = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      b = 1;
      digits[i] = 0;
      continue;
    }
    digits[i] = ++digits[i]
    b = 0;
    return digits;
  }

  if (b) {
    return [1, ...digits];
  }

  return digits;
};


