import redis from 'redis'

const REDIS_PORT = 6379

export const redisClient = redis.createClient(REDIS_PORT)

// close redisClient properly after all tests
// ref: https://stackoverflow.com/a/54560610
export async function closeRedisClient() {
  await new Promise((resolve) => {
    redisClient.quit(() => {
      resolve()
    })
  })
  // redis.quit() creates a thread to close the connection.
  // We wait until all threads have been run once to ensure the connection closes.
  await new Promise(resolve => setImmediate(resolve))
}