import 'regenerator-runtime/runtime'
import { closeRedisClient } from './src/lib/redisLib'

// Establish API mocking before all tests.
beforeAll(() => {
  jest.createMockFromModule('node-fetch') // fix CI mock module?
})

// Tasks before each tests
beforeEach(() => {})

// Clean up after the tests are finished.
afterAll(async () => {
  await closeRedisClient()
})
