const fizzBuzz = require('../fizzBuzz');

test('fizzBuzz', () => {
    expect(fizzBuzz(1)).toStrictEqual(['1']);
    expect(fizzBuzz(2)).toStrictEqual(['1', '2']);
    expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
    expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
    expect(fizzBuzz(15)).toStrictEqual([
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz',
        '11',
        'Fizz',
        '13',
        '14',
        'FizzBuzz',
    ]);
});
