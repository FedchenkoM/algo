// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const map = new Map();

    for (const word of strs) {
        const sortedWord = Array.from(word).sort().join('');

        if (map.has(sortedWord)) {
            map.set(sortedWord, [...map.get(sortedWord), word]);
            continue;
        }
        map.set(sortedWord, [word]);
    }

    return Array.from(map.values());
};
