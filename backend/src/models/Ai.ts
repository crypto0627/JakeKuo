import mongoose from 'mongoose'

const AiSchema = new mongoose.Schema({
  messages: [
    {
      role: {
        type: String,
        enum: ['user', 'assistant'],
        required: true
      },
      content: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],
  model: {
    type: String,
    default: 'llama3.2'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Ai', AiSchema)
