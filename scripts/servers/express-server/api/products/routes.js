
const express = require('express');
const { getProductController, createProductController, updateProductController, deleteProductController } = require('./controller');

const productsRouter = express.Router()

productsRouter.get('/', getProductController)
productsRouter.post('/', createProductController)
productsRouter.put('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)


module.exports = productsRouter