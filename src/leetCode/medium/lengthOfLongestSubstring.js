// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length < 1) return s.length;

    const set = new Set();
    let window = 1;

    for (let i = 0; i < s.length; i++) {
        let cur = i;

        while (!set.has(s[cur]) && s[cur]) {
            set.add(s[cur]);
            cur++;
        }

        set.clear();
        window = Math.max(cur - i, window);
    }

    return window;
};

// faster
const lengthOfLongestSubstring2 = function (s) {
    const set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }
    return maxSize;
};
