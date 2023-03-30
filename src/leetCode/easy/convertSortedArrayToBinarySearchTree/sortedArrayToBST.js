//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums, l = 0, r = nums.length - 1) {
    if (l > r) return null;
    const m = Math.floor((l + r) / 2);

    const root = new TreeNode(nums[m]);

    root.left = sortedArrayToBST(nums, l, m - 1);
    root.right = sortedArrayToBST(nums, m + 1, r);

    return root;
};
