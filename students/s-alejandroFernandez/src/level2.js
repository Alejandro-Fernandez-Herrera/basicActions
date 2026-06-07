// --- Function 1 ---
function toTitleCase(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// --- Function 2 ---
function fizzBuzz(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0)
    throw new Error('Input must be a positive integer');
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}

// --- Function 3 ---
function isIsogram(word) {
  if (typeof word !== 'string') throw new Error('Input must be a string');
  const clean = word.toLowerCase().replace(/\s+/g, '');
  return new Set(clean).size === clean.length;
}

// --- Function 4 ---
function uniqueWords(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const words = text.toLowerCase().match(/\b\w+\b/g);
  if (!words) return [];
  return [...new Set(words)];
}

// --- Function 5 ---
function isValidEmail(email) {
  if (typeof email !== 'string') throw new Error('Input must be a string');
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

module.exports = { toTitleCase, fizzBuzz, isIsogram, uniqueWords, isValidEmail };