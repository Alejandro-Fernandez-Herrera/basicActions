const { toTitleCase, fizzBuzz, isIsogram, uniqueWords, isValidEmail } = require('../src/level2');

// --- toTitleCase ---
describe('toTitleCase', () => {
  it('capitalizes the first letter of each word', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
  });
  it('handles already capitalized text', () => {
    expect(toTitleCase('HELLO WORLD')).toBe('Hello World');
  });
  it('handles a single word', () => {
    expect(toTitleCase('javascript')).toBe('Javascript');
  });
  it('returns empty string for empty input', () => {
    expect(toTitleCase('')).toBe('');
  });
  it('throws if input is not a string', () => {
    expect(() => toTitleCase(123)).toThrow('Input must be a string');
  });
});

// --- fizzBuzz ---
describe('fizzBuzz', () => {
  it('returns Fizz for multiples of 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('returns Buzz for multiples of 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('returns FizzBuzz for multiples of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('returns the number as string otherwise', () => {
    expect(fizzBuzz(7)).toBe('7');
  });
  it('throws for non-positive integers', () => {
    expect(() => fizzBuzz(0)).toThrow('Input must be a positive integer');
  });
  it('throws for non-integer input', () => {
    expect(() => fizzBuzz('three')).toThrow('Input must be a positive integer');
  });
});

// --- isIsogram ---
describe('isIsogram', () => {
  it('returns true for an isogram', () => {
    expect(isIsogram('lemon')).toBe(true);
  });
  it('returns false for a non-isogram', () => {
    expect(isIsogram('hello')).toBe(false);
  });
  it('is case-insensitive', () => {
    expect(isIsogram('Lemon')).toBe(true);
  });
  it('returns true for a single character', () => {
    expect(isIsogram('a')).toBe(true);
  });
  it('throws if input is not a string', () => {
    expect(() => isIsogram(123)).toThrow('Input must be a string');
  });
});

// --- uniqueWords ---
describe('uniqueWords', () => {
  it('returns unique words from a sentence', () => {
    expect(uniqueWords('the cat sat on the mat')).toEqual(['the', 'cat', 'sat', 'on', 'mat']);
  });
  it('is case-insensitive', () => {
    expect(uniqueWords('Hello hello')).toEqual(['hello']);
  });
  it('returns empty array for empty string', () => {
    expect(uniqueWords('')).toEqual([]);
  });
  it('handles a single word', () => {
    expect(uniqueWords('javascript')).toEqual(['javascript']);
  });
  it('throws if input is not a string', () => {
    expect(() => uniqueWords(42)).toThrow('Input must be a string');
  });
});

// --- isValidEmail ---
describe('isValidEmail', () => {
  it('returns true for a valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });
  it('returns false when missing @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });
  it('returns false when missing domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });
  it('returns false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });
  it('throws if input is not a string', () => {
    expect(() => isValidEmail(123)).toThrow('Input must be a string');
  });
});