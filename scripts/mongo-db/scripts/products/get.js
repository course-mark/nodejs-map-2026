const crypto = require('crypto')
global.crypto = crypto

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Products');

const Product = mongoose.model('Product', {
    name:{
        type: String,
        required: true
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    price:{
        type:Number,
        required: true
    }
})

async function getProducts() {
    const products = await Product.find({}).exec()

    console.log(products)

    mongoose.connection.close()
}

getProducts()
