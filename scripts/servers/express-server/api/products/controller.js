const { createProduct, getProducts } = require("./service")

const getProductController = (req , res)=>{
    const products = getProducts()
    res.json(products)
    // res.json(getProducts())
}

const createProductController = (req , res)=>{
    createProduct(req.body)
    res.send("product Created")
}

module.exports = {
    getProductController,
    createProductController,
}