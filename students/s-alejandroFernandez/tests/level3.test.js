const { calculator } = require('../src/level3');

// --- calculator ---
describe('calculator', () => {
  it('adds two numbers', () => {
    expect(calculator(2, 3, '+')).toBe(5);
  });
  it('subtracts two numbers', () => {
    expect(calculator(10, 4, '-')).toBe(6);
  });
  it('multiplies two numbers', () => {
    expect(calculator(3, 4, '*')).toBe(12);
  });
  it('divides two numbers', () => {
    expect(calculator(10, 2, '/')).toBe(5);
  });
  it('throws on division by zero', () => {
    expect(() => calculator(5, 0, '/')).toThrow('Division by zero is not allowed');
  });
  it('throws for unsupported operator', () => {
    expect(() => calculator(1, 2, '%')).toThrow('Unsupported operator: %');
  });
  it('throws if operands are not numbers', () => {
    expect(() => calculator('a', 2, '+')).toThrow('Operands must be numbers');
  });
  it('throws if operator is not a string', () => {
    expect(() => calculator(1, 2, 1)).toThrow('Operator must be a string');
  });
  it('handles negative numbers', () => {
    expect(calculator(-3, -2, '*')).toBe(6);
  });
  it('handles decimal numbers', () => {
    expect(calculator(0.1, 0.2, '+')).toBeCloseTo(0.3);
  });
});


const { validatePassword } = require('../src/level3');

// --- validatePassword ---
describe('validatePassword', () => {
  it('returns strong true for a valid password', () => {
    expect(validatePassword('Secure@123')).toEqual({ strong: true, errors: [] });
  });
  it('fails if password is too short', () => {
    const result = validatePassword('Ab@1');
    expect(result.strong).toBe(false);
    expect(result.errors).toContain('Must be at least 8 characters');
  });
  it('fails if no uppercase letter', () => {
    const result = validatePassword('secure@123');
    expect(result.strong).toBe(false);
    expect(result.errors).toContain('Must contain at least one uppercase letter');
  });
  it('fails if no lowercase letter', () => {
    const result = validatePassword('SECURE@123');
    expect(result.strong).toBe(false);
    expect(result.errors).toContain('Must contain at least one lowercase letter');
  });
  it('fails if no number', () => {
    const result = validatePassword('Secure@abc');
    expect(result.strong).toBe(false);
    expect(result.errors).toContain('Must contain at least one number');
  });
  it('fails if no special character', () => {
    const result = validatePassword('Secure1234');
    expect(result.strong).toBe(false);
    expect(result.errors).toContain('Must contain at least one special character');
  });
  it('returns multiple errors for weak password', () => {
    const result = validatePassword('abc');
    expect(result.strong).toBe(false);
    expect(result.errors.length).toBeGreaterThan(1);
  });
  it('throws if input is not a string', () => {
    expect(() => validatePassword(123)).toThrow('Input must be a string');
  });
});