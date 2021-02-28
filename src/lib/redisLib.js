import redis from 'redis'
import request from 'request'

const REDIS_PORT = 6379

export const redisClient = process.env.CI
  ? redis.createClient(REDIS_PORT, { host: 'redis' })
  : redis.createClient(REDIS_PORT)

redisClient.set('serverAvailable', 'yes')

// close redisClient properly after all tests
// ref: https://stackoverflow.com/a/54560610
export const closeRedisClient = async () => {
  await new Promise((resolve) => {
    redisClient.quit(() => {
      resolve()
    })
  })
  // redis.quit() creates a thread to close the connection.
  // We wait until all threads have been run once to ensure the connection closes.
  await new Promise(resolve => setImmediate(resolve))
}

export const hasRedisServer = () => {
  try {
    redisClient.get('serverAvailable', (err, res) => {
      if (err) return false
      if (res === 'yes') return true
      return false
    })
  } catch (error) {
    console.log('redis server is not available')
    return false
  }
}