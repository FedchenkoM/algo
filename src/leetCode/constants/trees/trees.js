/**
 * Symmetric tree example
 *            1                  2
 *         2    2      OR     0     0
 *       3  1  1  3            1   1
 */
export const SYMMETRIC_TREE = {
    val: 1,
    left: { val: 2, left: { val: 0, left: null, right: null }, right: null },
    right: { val: 2, left: null, right: { val: 0, left: null, right: null } },
};

export const NOT_SYMMETRIC_TREE = {
    val: 1,
    left: { val: 2, left: { val: 2, left: null, right: null }, right: null },
    right: { val: 2, left: null, right: { val: 0, left: null, right: null } },
};

export const TREE1 = {
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

export const TREE2 = {
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
