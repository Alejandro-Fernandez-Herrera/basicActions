// --- Function 1 ---
function calculator(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error('Operands must be numbers');
  if (typeof operator !== 'string')
    throw new Error('Operator must be a string');
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) throw new Error('Division by zero is not allowed');
      return a / b;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

module.exports = { calculator };