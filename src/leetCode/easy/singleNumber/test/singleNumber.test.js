const singleNumber = require('../singleNumber');

test('Single number', () => {
    expect(singleNumber([1, 1, 2, 2, 3])).toBe(3);
    expect(singleNumber([1])).toBe(1);
    expect(singleNumber([1, 1, 2, 2, 3, 3, 4, 4])).toBe(0);
    expect(
        singleNumber([100, 100, 20, 20, 323, 323, 4222, 4222, 1000000]),
    ).toBe(1000000);
    expect(singleNumber([22, 22])).toBe(0);
});
