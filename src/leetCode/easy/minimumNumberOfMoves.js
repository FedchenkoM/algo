// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function (seats, students) {
    let result = 0;

    seats = seats.sort((a, b) => a - b);
    students = students.sort((a, b) => a - b);

    for (let i = 0; i < seats.length; i++) {
        result += Math.abs(students[i] - seats[i]);
    }

    return result;
};
