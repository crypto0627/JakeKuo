import { Router } from 'express'
import { chatWithOllama } from '../controllers/aiController'
import { RequestHandler } from 'express'

const router = Router()

// AI 相關路由
router.post('/chat', chatWithOllama as unknown as RequestHandler)

export default router
