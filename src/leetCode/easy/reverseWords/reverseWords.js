// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    return s
        .split(' ')
        .map((word) => {
            let reverseWord = '';
            for (let i = word.length - 1; i > -1; i--) {
                reverseWord += word[i];
            }
            return reverseWord;
        })
        .join(' ');
};
