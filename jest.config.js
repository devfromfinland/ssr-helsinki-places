module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  verbose: true,
}