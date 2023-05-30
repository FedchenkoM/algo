// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
    const stack = [];
    let result = 0;

    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < stack.length; i++) {
        if (stack[stack.length - i] === 1) {
            result += i ** 2;
        }
    }

    return result;
};
