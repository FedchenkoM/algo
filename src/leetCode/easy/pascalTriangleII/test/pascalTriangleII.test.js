const getRow = require('../pascalTriangleII');

test('pascal triangle II', () => {
    expect(getRow(0)).toStrictEqual([1]);
    expect(getRow(1)).toStrictEqual([1, 1]);
    expect(getRow(2)).toStrictEqual([1, 2, 1]);
    expect(getRow(3)).toStrictEqual([1, 3, 3, 1]);
    expect(getRow(4)).toStrictEqual([1, 4, 6, 4, 1]);
    expect(getRow(9)).toStrictEqual([1, 9, 36, 84, 126, 126, 84, 36, 9, 1]);
});
