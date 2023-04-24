// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */
const minDepth = function (root) {
    if (root === null) return 0;
    if (root.left === null) return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

const minDepth2 = function (root) {
    if (!root) return 0;

    let minLevel = Infinity;
    let level = 1;

    const queue = [root];

    while (queue.length) {
        const { length } = queue;
        for (let i = 0; i < queue.length; i++) {
            const currNode = queue.shift();
            if (!currNode.left && !currNode.right) {
                minLevel = Math.min(minLevel, level);
            }
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        level++;
    }
    return minLevel;
};

const minDepth3 = function (root) {
    if (!root) return 0;
    let minLevel = Infinity;

    const dfs = (root, level) => {
        if (!root) return;
        if (!root.left && !root.right) {
            minLevel = Math.min(level, minLevel);
        }
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    };
    dfs(root, 1);
    return minLevel;
};
