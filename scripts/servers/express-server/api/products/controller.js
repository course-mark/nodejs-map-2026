const { createProduct, getProducts, updateProduct, deleteProduct } = require("./service.db")

const getProductController = async (req, res) => {
    const products = await getProducts()
    res.json(products)
}

const createProductController = async (req, res) => {
    res.json(await createProduct(req.body))
}

const updateProductController = async (req, res) => {
    const productId = req.params.productId
    res.json(await updateProduct(productId, req.body))
}

const deleteProductController = async (req, res) => {
    const productId = req.params.productId
    res.json(await deleteProduct(productId))
}

const updateProductController = async (req, res) => {
    const { id } = req.params
    const updatedProduct = await updateProduct(id, req.body)
    res.json(updatedProduct)
}

const deleteProductController = async (req, res) => {
    const { id } = req.params
    const deletedProduct = await deleteProduct(id)
    res.json(deletedProduct)
}

module.exports = {
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController
}