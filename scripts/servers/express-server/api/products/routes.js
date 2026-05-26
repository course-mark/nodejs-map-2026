
const express = require('express');
const { getProductController, createProductController } = require('./controller');

const productsRouter = express.Router()

productsRouter.get('/', getProductController)
productsRouter.post('/', createProductController)


module.exports = productsRouter