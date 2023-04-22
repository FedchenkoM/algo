const { maxArea, maxArea2 } = require('../maxArea');

test('max area of water', () => {
    expect(maxArea([1, 1])).toBe(1);
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7, 22, 44, 8, 30])).toBe(88);
    expect(maxArea([1901, 2228, 336, 42, 6675, 41, 8, 3, 1111117])).toBe(26700);
});

test('max area of water 2', () => {
    expect(maxArea2([1, 1])).toBe(1);
    expect(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7, 22, 44, 8, 30])).toBe(88);
    expect(maxArea2([1901, 2228, 336, 42, 6675, 41, 8, 3, 1111117])).toBe(
        26700,
    );
});
