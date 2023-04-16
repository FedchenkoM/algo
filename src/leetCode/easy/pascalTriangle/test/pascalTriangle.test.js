const generate = require('../pascalTriangle');

test('counting bits', () => {
    expect(generate(1)).toStrictEqual([[1]]);
    expect(generate(2)).toStrictEqual([[1], [1, 1]]);
    expect(generate(3)).toStrictEqual([[1], [1, 1], [1, 2, 1]]);
    expect(generate(4)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
    expect(generate(5)).toStrictEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
    ]);
    expect(generate(10)).toStrictEqual([
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
        [1, 7, 21, 35, 35, 21, 7, 1],
        [1, 8, 28, 56, 70, 56, 28, 8, 1],
        [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ]);
});
