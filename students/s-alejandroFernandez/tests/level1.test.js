const { isPalindrome, sumArray, countVowels, findLargest } = require('../src/level1');

// --- isPalindrome ---
describe('isPalindrome', () => {
  it('returns true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  it('returns true ignoring case', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });
  it('returns true ignoring spaces', () => {
    expect(isPalindrome('a man')).toBe(false);
  });
  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
  it('throws if input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});

// --- sumArray ---
describe('sumArray', () => {
  it('returns the sum of positive numbers', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });
  it('returns 0 for an empty array', () => {
    expect(sumArray([])).toBe(0);
  });
  it('handles negative numbers', () => {
    expect(sumArray([-1, -2, 3])).toBe(0);
  });
  it('throws if input is not an array', () => {
    expect(() => sumArray('hello')).toThrow('Input must be an array');
  });
});

// --- countVowels ---
describe('countVowels', () => {
  it('counts vowels in a sentence', () => {
    expect(countVowels('hello world')).toBe(3);
  });
  it('returns 0 when there are no vowels', () => {
    expect(countVowels('gym')).toBe(0);
  });
  it('counts vowels case-insensitively', () => {
    expect(countVowels('HELLO')).toBe(2);
  });
  it('returns 0 for empty string', () => {
    expect(countVowels('')).toBe(0);
  });
  it('throws if input is not a string', () => {
    expect(() => countVowels(42)).toThrow('Input must be a string');
  });
});

// --- findLargest ---
describe('findLargest', () => {
  it('returns the largest number', () => {
    expect(findLargest([1, 5, 3])).toBe(5);
  });
  it('works with negative numbers', () => {
    expect(findLargest([-3, -1, -2])).toBe(-1);
  });
  it('works with a single element', () => {
    expect(findLargest([7])).toBe(7);
  });
  it('throws for an empty array', () => {
    expect(() => findLargest([])).toThrow('Input must be a non-empty array');
  });
  it('throws if input is not an array', () => {
    expect(() => findLargest('hello')).toThrow('Input must be a non-empty array');
  });
});