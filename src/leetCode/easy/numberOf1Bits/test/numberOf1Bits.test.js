const { hammingWeight, hammingWeightBit } = require('../numberOf1Bits');

test('number of 1 bits', () => {
    expect(hammingWeight(0)).toBe(0);
    expect(hammingWeight(1)).toBe(1);
    expect(hammingWeight(2)).toBe(1);
    expect(hammingWeight(4)).toBe(1);
    expect(hammingWeight(8)).toBe(1);
    expect(hammingWeight(9)).toBe(2);
    expect(hammingWeight(11)).toBe(3);
    expect(hammingWeight(64)).toBe(1);
    expect(hammingWeight(67)).toBe(3);
    expect(hammingWeight(32000)).toBe(6);
    expect(hammingWeight(1_000_000_000_000_011)).toBe(23);
});

test('number of 1 bits with bits manipulation', () => {
    expect(hammingWeightBit(0)).toBe(0);
    expect(hammingWeightBit(1)).toBe(1);
    expect(hammingWeightBit(2)).toBe(1);
    expect(hammingWeightBit(4)).toBe(1);
    expect(hammingWeightBit(8)).toBe(1);
    expect(hammingWeightBit(9)).toBe(2);
    expect(hammingWeightBit(11)).toBe(3);
    expect(hammingWeightBit(64)).toBe(1);
    expect(hammingWeightBit(67)).toBe(3);
    expect(hammingWeightBit(32000)).toBe(6);
    expect(hammingWeightBit(1000011)).toBe(10);
});
