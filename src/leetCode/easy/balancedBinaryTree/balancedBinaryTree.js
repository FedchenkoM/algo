// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    if (root === null) return 1;

    const lh = isBalanced(root.left);
    const rh = isBalanced(root.right);

    if (lh == 0 || rh == 0 || Math.abs(lh - rh) > 1) return 0;

    return Math.max(lh, rh) + 1;
};
