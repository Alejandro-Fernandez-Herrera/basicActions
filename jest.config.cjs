module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/students/**/tests/**/*.test.js"],
  collectCoverageFrom: ["students/**/src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
