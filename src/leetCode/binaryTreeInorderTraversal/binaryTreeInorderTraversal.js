// https://leetcode.com/problems/binary-tree-inorder-traversal/

const tree = {
    val: 52,
    left: {
        val: 46,
        left: {
            val: 41,
            left: null,
            right: {
                val: 44,
                left: null,
                right: { val: 45, left: null, right: null },
            },
        },
        right: {
            val: 49,
            left: { val: 48, left: null, right: null },
            right: { val: 50, left: null, right: null },
        },
    },
    right: {
        val: 60,
        left: { val: 55, left: null, right: null },
        right: { val: 68, left: null, right: null },
    },
};

const inorderTraversal = function (root) {
    const stack = [];
    const ans = [];

    let cur = root;

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop();
        ans.push(cur.val);
        cur = cur.right;
    }

    return ans;
};
