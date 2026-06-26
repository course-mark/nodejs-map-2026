
const express = require('express');
const { getProductController, createProductController, updateProductController, deleteProductController } = require('./controller');

const productsRouter = express.Router()

productsRouter.get('/', getProductController)
productsRouter.post('/', createProductController)
<<<<<<< HEAD
productsRouter.put('/:id', updateProductController)
productsRouter.delete('/:id', deleteProductController)
=======
productsRouter.put('/:productId',updateProductController)
productsRouter.delete('/:productId',deleteProductController)
>>>>>>> 413d6259cc036e8210646d9c25b8d785b9bdce44


module.exports = productsRouter