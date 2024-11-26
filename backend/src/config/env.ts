import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/auth_db',
  redisURI: process.env.REDIS_URI || 'redis://localhost:6379',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'
}
