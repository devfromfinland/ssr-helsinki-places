import redis from 'redis'

const REDIS_PORT = 6379
const redisClient = redis.createClient(REDIS_PORT)

export default redisClient