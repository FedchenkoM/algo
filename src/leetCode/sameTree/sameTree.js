// https://leetcode.com/problems/same-tree/

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

const tree2 = {
    val: 52,
    left: {
        val: 46,
        left: {
            val: 41,
            left: null,
            right: {
                val: 44, // sasas
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

const tree3 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
};

const tree4 = {
    val: 2,
    left: null,
    right: { val: 4, left: null, right: null },
};

const tree5 = {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null },
};

const isSameTree = function (p, q) {
    const stack = [];
    while (stack.length || p != null || q != null) {
        while (p != null && q != null && p.val == q.val) {
            stack.push(p);
            stack.push(q);

            q = q.left;
            p = p.left;
        }
        if (p?.val != q?.val) return false;

        q = stack.pop();
        p = stack.pop();

        if (!p || !q) return false;

        p = p.right;
        q = q.right;
    }

    return true;
};
