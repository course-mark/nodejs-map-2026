const { createProduct, getProducts, updateProduct, deleteProduct } = require("./service.db")

const getProductController = async(req , res)=>{
    const products = await getProducts()
    res.json(products)
   
}

const createProductController = async(req , res)=>{
    createProduct(req.body)
     const product = await getProducts(createProduct)
        res.json(product)
  
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