const { reverseString, reverseString2 } = require('../reverseString');

test('Reverse string', () => {
    expect(reverseString([])).toStrictEqual([]);
    expect(reverseString(['w'])).toStrictEqual(['w']);
    expect(reverseString(['1', '2', '3'])).toStrictEqual(['3', '2', '1']);
    expect(reverseString(['H', 'e', 'l', 'l', 'o'])).toStrictEqual([
        'o',
        'l',
        'l',
        'e',
        'H',
    ]);
});
test('Reverse string 2', () => {
    expect(reverseString2([])).toStrictEqual([]);
    expect(reverseString2(['w'])).toStrictEqual(['w']);
    expect(reverseString2(['1', '2', '3'])).toStrictEqual(['3', '2', '1']);
    expect(reverseString2(['H', 'e', 'l', 'l', 'o'])).toStrictEqual([
        'o',
        'l',
        'l',
        'e',
        'H',
    ]);
});
