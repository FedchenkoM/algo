// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const action = (n1, n2, action) => {
    switch (action) {
        case '+':
            return n2 + n1;
        case '-':
            return n2 - n1;
        case '*':
            return n2 * n1;
        case '/':
            return n2 / n1 < 0 ? Math.ceil(n2 / n1) : Math.floor(n2 / n1);
        default:
            break;
    }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const token = Number(tokens[i]);

        if (!Number.isNaN(token)) {
            stack.push(token);
            continue;
        }

        stack.push(action(stack.pop(), stack.pop(), tokens[i]));
    }

    return stack[0];
};
