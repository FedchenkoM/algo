const {
    isPalindrome,
    validPalindrome2,
    isPalindrome2,
} = require('../validPalindrome');

test('valid palindrome', () => {
    expect(isPalindrome(' ')).toBe(true);
    expect(isPalindrome('0p')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('Gabler Ruby — burrel bag')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama canal')).toBe(false);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome('Standart — smallest, sell Amstrad nats.')).toBe(true);
    expect(
        isPalindrome('Do me?.. Kill I victim? Must summit civil like mod.'),
    ).toBe(true);
});

test('valid palindrome 2', () => {
    expect(isPalindrome2(' ')).toBe(true);
    expect(isPalindrome2('0p')).toBe(false);
    expect(isPalindrome2('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome2('Gabler Ruby — burrel bag')).toBe(true);
    expect(isPalindrome2('A man, a plan, a canal: Panama canal')).toBe(false);
    expect(isPalindrome2('race a car')).toBe(false);
    expect(isPalindrome2('Standart — smallest, sell Amstrad nats.')).toBe(true);
    expect(
        isPalindrome2('Do me?.. Kill I victim? Must summit civil like mod.'),
    ).toBe(true);
});
