const { addBinary, addBinary2 } = require('../addBinary');

test('addBinary', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1111', '1111')).toBe('11110');
    expect(addBinary('11110', '1111')).toBe('101101');
    expect(addBinary('11110', '1111')).toBe('101101');
    expect(addBinary('0', '0')).toBe('0');
    expect(addBinary('1', '1')).toBe('10');
});

test('addBinary2', () => {
    expect(addBinary2('11', '1')).toBe('100');
    expect(addBinary2('1111', '1111')).toBe('11110');
    expect(addBinary2('11110', '1111')).toBe('101101');
    expect(addBinary2('11110', '1111')).toBe('101101');
    expect(addBinary2('0', '0')).toBe('0');
    expect(addBinary2('1', '1')).toBe('10');
});
