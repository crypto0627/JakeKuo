import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import { config } from './config/env'

const app = express()

// Middleware
app.use(express.json())

// cors
app.use(
  cors((req, callback) => {
    const allowedOrigins = ['http://localhost:3000', 'http://jakekuo.com']
    const origin = req.header('Origin')
    if (origin && allowedOrigins.includes(origin)) {
      callback(null, { origin: true })
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  })
)

// Routes
app.use('/api/auth', authRoutes)

// MongoDB Connection
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Start Server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
