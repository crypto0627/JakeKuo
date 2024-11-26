import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import aiRoutes from './routes/aiRoutes'
import { config } from './config/env'

const app = express()

// Middleware
app.use(express.json())

// cors
app.use(
  cors({
    origin: [/^http:\/\/localhost:3\d{3}$/, 'https://www.jakekuo.com'],
    credentials: true
  })
)

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/ai', aiRoutes)

// MongoDB Connection
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Start Server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
