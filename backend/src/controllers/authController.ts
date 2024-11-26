import { Request, Response } from 'express'
import { User } from '../models/User'
import {
  hashPassword,
  comparePassword,
  generateToken
} from '../utils/authUtils'
import Redis from 'ioredis'
import { config } from '../config/env'
import bcrypt from 'bcryptjs'

const redis = new Redis(config.redisURI)

// 添加这个接口定义在文件顶部
interface AuthRequest extends Request {
  user?: {
    id: string
  }
}

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' })
    }

    const hashedPassword = await hashPassword(password)
    const newUser = new User({ email, password: hashedPassword })

    await newUser.save()
    res.status(201).json({ message: 'User signuped successfully.' })
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }

    const token = generateToken(user.id)

    // Save token in Redis
    await redis.set(user.id, token, 'EX', 3600) // 1 hour expiration

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error })
  }
}

// Signout Controller
export const signOut = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id
    if (userId) {
      await redis.del(userId)
    }
    return res.status(200).json({ message: 'Sign out successful' })
  } catch (error) {
    return res.status(500).json({ message: 'Error during sign out', error })
  }
}

// Update User Controller
export const updatePassword = async (req: AuthRequest, res: Response) => {
  const { oldPassword, newPassword } = req.body
  const userId = req.user?.id // 使用可選鏈運算符來避免未定義錯誤

  if (!oldPassword || !newPassword) {
    return res
      .status(400)
      .json({ message: 'Both old and new passwords are required' })
  }

  try {
    // 從資料庫獲取用戶
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // 檢查舊密碼是否正確
    const isMatch = await bcrypt.compare(oldPassword, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Old password is incorrect' })
    }

    // 加密新密碼
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    // 更新密碼
    user.password = hashedPassword
    await user.save()

    return res.status(200).json({ message: 'Password updated successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Error updating password', error })
  }
}
