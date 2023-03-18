//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

const haystack = "leetocode", needle = "leebt";
const haystack2 = "leetocode", needle2 = "code";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let r = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      r = i;
      for (let k = 0, j = i; k < needle.length; k++, j++) {
        if (haystack[j] !== needle[k]) {
          r = -1;
          break;
        }
      }
    }
    if (r > -1) return r;
  }
  return r;
};
