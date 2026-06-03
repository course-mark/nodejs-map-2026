const mongoose = require('mongoose')
const Products = require('../../db/models/Products')



const createProduct = async(dataProducts)=>{
const product = new Products(dataProducts)
return await product.save()
}

const getProducts = async ()=>{
    return await Products.find().exec()
}

module.exports = {
    createProduct,
    getProducts
}