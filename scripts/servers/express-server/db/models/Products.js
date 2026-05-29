const mongoose = require('mongoose')
const Products = mongoose.model('Product', {name: String , price:Number})

module.exports = Products