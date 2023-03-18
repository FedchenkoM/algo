//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const l = { val: 1, next: { val: 1, next: { val: 2, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } } };
const l2 = { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 3, next: null } } } } };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null
  else if (head.val !== head.next?.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }

  head = deleteDuplicates(head.next);
  return head;
}