// https://leetcode.com/problems/calculate-delayed-arrival-time/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
const findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    return arrivalTime + delayedTime > 23
        ? arrivalTime + delayedTime - (23 % (arrivalTime + delayedTime)) - 1
        : arrivalTime + delayedTime;
};
