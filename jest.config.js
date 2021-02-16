module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: '<rootDir>/coverage',
}
