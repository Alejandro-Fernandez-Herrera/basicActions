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



// --- Function 2 ---
function validatePassword(password) {
  if (typeof password !== 'string') throw new Error('Input must be a string');
  const result = {
    strong: false,
    errors: []
  };
  if (password.length < 8)
    result.errors.push('Must be at least 8 characters');
  if (!/[A-Z]/.test(password))
    result.errors.push('Must contain at least one uppercase letter');
  if (!/[a-z]/.test(password))
    result.errors.push('Must contain at least one lowercase letter');
  if (!/[0-9]/.test(password))
    result.errors.push('Must contain at least one number');
  if (!/[^A-Za-z0-9]/.test(password))
    result.errors.push('Must contain at least one special character');
  result.strong = result.errors.length === 0;
  return result;
}


module.exports = { calculator, validatePassword };