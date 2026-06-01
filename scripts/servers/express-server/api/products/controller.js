const { createProduct, getProducts } = require("./service.db")

const getProductController = async(req , res)=>{
    const products = await getProducts()
    res.json(products)
   
}

const createProductController = async(req , res)=>{
    createProduct(req.body)
     const product = await getProducts(createProduct)
        res.json(product)
  
}

module.exports = {
    getProductController,
    createProductController,
}