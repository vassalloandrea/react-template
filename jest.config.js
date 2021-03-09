module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/atoms/*.{ts,tsx}',
    '<rootDir>/src/molecules/*.{ts,tsx}',
    '<rootDir>/src/organisms/*.{ts,tsx}',
    '<rootDir>/src/templates/*.{ts,tsx}',
    '<rootDir>/src/pages/*.{ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
}
