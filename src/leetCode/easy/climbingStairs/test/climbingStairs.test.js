const climbStairs = require('../climbingStairs');

test('climbStairs', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(6)).toBe(13);
    expect(climbStairs(7)).toBe(21);
    expect(climbStairs(8)).toBe(34);
    expect(climbStairs(9)).toBe(55);
    expect(climbStairs(10)).toBe(89);
    expect(climbStairs(11)).toBe(144);
    expect(climbStairs(12)).toBe(233);
    expect(climbStairs(13)).toBe(377);
    expect(climbStairs(14)).toBe(610);
    expect(climbStairs(15)).toBe(987);
    expect(climbStairs(16)).toBe(1597);
    expect(climbStairs(17)).toBe(2584);
    expect(climbStairs(18)).toBe(4181);
    expect(climbStairs(19)).toBe(6765);
    expect(climbStairs(20)).toBe(10946);
});
