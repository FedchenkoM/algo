// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const l2 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l1 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let link = new ListNode(null, null);
    const head = link;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            link.next = list1;
            list1 = list1.next;
        } else {
            link.next = list2;
            list2 = list2.next;
        }

        link = link.next;
    }

    if (list1 == null) {
        link.next = list2;
    } else {
        link.next = list1;
    }

    return head.next;
};

const recursiveMergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val <= list2.val) {
        list1.next = recursiveMergeTwoLists(list1.next, list2);
        return list1;
    }
    list2.next = recursiveMergeTwoLists(list1, list2.next);
    return list2;
};
