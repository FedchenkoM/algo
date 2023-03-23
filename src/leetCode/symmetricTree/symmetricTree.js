// https://leetcode.com/problems/symmetric-tree/

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
const isSymmetric = function (root) {
    const stack = [];

    let lt = root.left;
    let rt = root.right;

    while (stack.length || lt || rt) {
        while (rt && lt) {
            if (rt.val !== lt.val) return false;

            stack.push(lt);
            stack.push(rt);

            lt = lt.left;
            rt = rt.right;
        }
        if (rt?.val != lt?.val) return false;

        rt = stack.pop();
        lt = stack.pop();

        if (!lt || !rt) return false;

        lt = lt.right;
        rt = rt.left;
    }

    return true;
};
