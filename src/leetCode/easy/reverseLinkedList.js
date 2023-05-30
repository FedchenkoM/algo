// https://leetcode.com/problems/reverse-linked-list/

const linkedList = {
    val: 1,
    next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let prev = null;
    let cur = head;

    while (cur) {
        const n = cur.next;
        cur.next = prev;
        prev = cur;
        cur = n;
    }

    return prev;
};
