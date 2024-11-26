import { Router } from 'express'
import { signup, login, signOut } from '../controllers/authController'
import { RequestHandler } from 'express'

const router = Router()

router.post('/signup', signup as unknown as RequestHandler)
router.post('/login', login as unknown as RequestHandler)
router.post('/signout', signOut as unknown as RequestHandler)

export default router
