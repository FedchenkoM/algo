// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const a = {};
    for (let i = 0; i < s.length; i++) {
        if (!a[s[i]]) {
            a[s[i]] = 1;
        } else {
            a[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!a[t[i]] || a[t[i]] < 0) {
            return false;
        }
        a[t[i]]--;
    }

    return true;
};

// With map solution

const isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false;
    const sM = new Map();

    for (let i = 0; i < s.length; i++) {
        sM.set(s[i], (sM.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        const count = (sM.get(t[i]) || 0) - 1;
        sM.set(t[i], count);

        if (count < 0) return false;
    }

    return true;
};
