module.exports = {
  env: { node: true, es2021: true, jest: true },
  extends: 'eslint:recommended',
  rules: {
    'complexity': ['warn', 5],
    'no-unused-vars': 'warn',
    'eqeqeq': ['error', 'always']
  }
};
