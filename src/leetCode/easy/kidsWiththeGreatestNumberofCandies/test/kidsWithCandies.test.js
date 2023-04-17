const kidsWithCandies = require('../kidsWithCandies');

test('kids with candies', () => {
    expect(kidsWithCandies([1], 4)).toStrictEqual([true]);
    expect(kidsWithCandies([1, 2, 3, 4, 5], 4)).toStrictEqual([
        true,
        true,
        true,
        true,
        true,
    ]);
    expect(kidsWithCandies([1, 3, 4, 4], 1)).toStrictEqual([
        false,
        true,
        true,
        true,
    ]);
    expect(kidsWithCandies([1, 1, 1, 4], 1)).toStrictEqual([
        false,
        false,
        false,
        true,
    ]);
});
