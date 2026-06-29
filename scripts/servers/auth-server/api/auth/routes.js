const express = require('express')
const { loginController } = require('./controller')

const authRouter = express.Router()

authRouter.post('/login', loginController)


module.exports = authRouter