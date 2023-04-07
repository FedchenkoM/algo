const countBits = require('../countingBits');

test('counting bitss', () => {
    expect(countBits(0)).toStrictEqual([0]);
    expect(countBits(1)).toStrictEqual([0, 1]);
    expect(countBits(2)).toStrictEqual([0, 1, 1]);
    expect(countBits(11)).toStrictEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]);
});
