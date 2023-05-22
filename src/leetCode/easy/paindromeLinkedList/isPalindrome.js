// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    const arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let l = 0, r = arr.length - 1; l <= r; l++, r--) {
        if (arr[l] !== arr[r]) return false;
    }

    return true;
};
