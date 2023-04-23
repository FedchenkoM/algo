// https://leetcode.com/problems/valid-palindrome/

// First
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        const codeL = s[l].toLowerCase().charCodeAt();
        const codeR = s[r].toLowerCase().charCodeAt();

        if (codeL < 48 || codeL > 122 || (codeL > 57 && codeL < 97)) {
            l++;
        } else if (codeR < 48 || codeR > 122 || (codeR > 57 && codeR < 97)) {
            r--;
        } else if (codeL !== codeR) {
            return false;
        } else {
            l++;
            r--;
        }
    }

    return true;
};

// Second (slow)
const isPalindrome2 = function (s) {
    const downCasedStr = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    const reversedStr = downCasedStr.split('').reverse().join('');

    return reversedStr === downCasedStr;
};

module.exports = { isPalindrome, isPalindrome2 };
