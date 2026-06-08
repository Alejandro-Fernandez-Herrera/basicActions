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