import { Router } from 'express'
import {
  signup,
  login,
  signOut,
  refreshToken
} from '../controllers/authController'
import { RequestHandler } from 'express'

const router = Router()

router.post('/signup', signup as unknown as RequestHandler)
router.post('/login', login as unknown as RequestHandler)
router.post('/signout', signOut as unknown as RequestHandler)
router.post('/refresh-token', refreshToken as unknown as RequestHandler)

export default router
