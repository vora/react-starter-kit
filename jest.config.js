module.exports = {
  transform: {
    '.(js|jsx)': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)(spec|test).js?(x)'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/']
}
