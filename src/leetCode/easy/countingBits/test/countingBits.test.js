const { countBits, countBits2 } = require('../countingBits');

test('counting bits', () => {
    expect(countBits(0)).toStrictEqual([0]);
    expect(countBits(1)).toStrictEqual([0, 1]);
    expect(countBits(2)).toStrictEqual([0, 1, 1]);
    expect(countBits(11)).toStrictEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]);
});

test('counting bits with bits manipulation', () => {
    expect(countBits2(0)).toStrictEqual([0]);
    expect(countBits2(1)).toStrictEqual([0, 1]);
    expect(countBits2(2)).toStrictEqual([0, 1, 1]);
    expect(countBits2(11)).toStrictEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]);
});
