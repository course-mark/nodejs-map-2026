
const express = require('express');
const { getProductController, createProductController, updateProductController, deleteProductController } = require('./controller');

const productsRouter = express.Router()

productsRouter.get('/', getProductController)
productsRouter.post('/', createProductController)
productsRouter.put('/:productId',updateProductController)
productsRouter.delete('/:productId',deleteProductController)


module.exports = productsRouter