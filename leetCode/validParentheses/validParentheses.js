// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} 
 * @return {boolean}
 */
var isValid = function (s) {
  const dict = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const e = s[i];

    if (e in dict) {

      if (dict[e] === stack[stack.length - 1]) {
        stack.pop();
        continue;
      }

      return false;
    }

    stack.push(e);
  }

  return !stack.length;
};


