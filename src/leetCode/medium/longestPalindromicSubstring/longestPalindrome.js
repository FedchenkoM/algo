// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let maxLength = 1;
    let start = 0;

    for (let c = 0; c < s.length; c++) {
        let l = c;
        let r = c;

        if (s[l] === s[r + 1]) {
            while (s[l] === s[r + 1]) {
                r++;
            }
        }

        let length = 1;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            length = r - l + 1;

            if (length > maxLength) {
                start = l;
                maxLength = length;
            }

            l--;
            r++;
        }
    }

    return s.substr(start, maxLength);
};

/// ////////////////////////////
const longestPalindrome2 = function (s) {
    let res = '';
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= 1; j++) {
            let l = i;
            let r = i + j;

            while (l >= 0 && r < s.length && s[l] === s[r]) {
                const len = r - l + 1;
                if (len > max) {
                    res = s.substring(l, r + 1);
                    max = len;
                }
                l--;
                r++;
            }
        }
    }
    return res;
};
