import redis from 'redis'

const REDIS_PORT = 6379

export const redisClient = process.env.REDIS_URL
  ? redis.createClient(process.env.REDIS_URL)
  : redis.createClient(REDIS_PORT) // localhost:6379

redisClient.on('error', () => {
  console.log('redis client error, redis cache is not available')
})

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
  await new Promise((resolve) => setImmediate(resolve))
}
