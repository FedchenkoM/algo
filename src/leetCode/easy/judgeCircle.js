// https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
    const sM = new Map();

    for (let i = 0; i < moves.length; i++) {
        sM.set(moves[i], (sM.get(moves[i]) || 0) + 1);
    }

    return sM.get('L') === sM.get('R') && sM.get('U') === sM.get('D');
};
