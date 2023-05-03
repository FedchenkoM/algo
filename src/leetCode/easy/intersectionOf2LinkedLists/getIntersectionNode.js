// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }

    return a;
};
