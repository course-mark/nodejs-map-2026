const express = require('express')
const { createUserController } = require('./controller')

const userRouter = express.Router()

userRouter.post('/', createUserController)

module.exports = userRouter