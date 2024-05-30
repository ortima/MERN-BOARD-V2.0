import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// SIGNUP USER
export const createUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      return next(new Error('User already exists', 400))
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    })

    // TOKEN
    const token = jwt.sign({ _id: newUser._id }, 'secretkey', {
      expiresIn: '2h',
    })

    res.status(200).json({
      staus: 'success',
      message: 'User successfuly registred!',
      token,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// LOGIN USER

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return next(new Error('User not found', 404))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    // TOKEN
    const token = jwt.sign({ _id: user._id }, 'secretkey', {
      expiresIn: '2h',
    })

    if (!isPasswordValid) {
      return next(new Error('Invalid email or password', 401))
    }
    res.status(200).json({
      staus: 'success',
      token,
      message: 'User logged successfuly!',
      user: user,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
