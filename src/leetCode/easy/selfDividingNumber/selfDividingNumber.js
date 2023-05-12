// https://leetcode.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    const result = [];

    for (let i = left; i <= right; i++) {
        if (
            String(i)
                .split('')
                .reduce((acc, num) => acc && i % num == 0, true)
        ) {
            result.push(i);
        }
    }
    return result;
};

function selfDividingNumbers2(left, right) {
    const result = [];
    const parseNum = (num) => {
        const copyNum = num;

        while (num > 0) {
            if (copyNum % (num % 10) !== 0) {
                return false;
            }

            num = Math.floor(num / 10);
        }

        return true;
    };

    while (left <= right) {
        const isFit = parseNum(left);

        if (isFit) {
            result.push(left);
        }

        left++;
    }

    return result;
}
