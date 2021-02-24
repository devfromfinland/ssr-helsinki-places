import server from './src/mocks/server'
import 'regenerator-runtime/runtime'
// import redisClient from './src/lib/redisLib'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => {
  // redisClient.end(true)
  server.close()
})