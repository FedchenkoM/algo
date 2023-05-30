// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */
const postorderTraversal = function (root) {
    const result = [];

    if (!root) return result;

    const stack = [root];

    while (stack.length) {
        for (let i = 0; i < stack.length; i++) {
            const node = stack.pop();
            result.unshift(node.val);

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
    }
    return result;
};
