// https://leetcode.com/problems/same-tree/

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
