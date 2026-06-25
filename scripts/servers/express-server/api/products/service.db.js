const mongoose = require('mongoose')
const Products = require('../../db/models/Products')



const createProduct = async(dataProducts)=>{
const product = new Products(dataProducts)
return await product.save()
}

const getProducts = async (id)=>{
    return await Products.findById(id).exec()
}

const updateProduct = async (id, dataProducts) => {
    return await Products.findByIdAndUpdate(id, dataProducts, { new: true }).exec()
}

const deleteProduct = async (id) => {
    return await Products.findByIdAndDelete(id).exec()
}

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}