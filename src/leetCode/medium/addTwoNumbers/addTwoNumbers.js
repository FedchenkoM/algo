// https://leetcode.com/problems/add-two-numbers/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const list = new ListNode();
    let res = list;
    let buffer = 0;

    while (l1 || l2) {
        res.next = new ListNode();
        res = res.next;

        if ((l1?.val ?? 0) + (l2?.val ?? 0) + buffer > 9) {
            res.val = (l1?.val ?? 0) + (l2?.val ?? 0) + buffer - 10;
            buffer = 1;
        } else {
            res.val = (l1?.val ?? 0) + (l2?.val ?? 0) + buffer;
            buffer = 0;
        }
        l1 = l1?.next;
        l2 = l2?.next;
    }

    if (buffer) res.next = new ListNode(1, null);

    return list.next;
};
