const crypto = require('crypto')
global.crypto = crypto

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Products');

const productName = process.argv[2]
const productPrice = process.argv[3]
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

const products = new product({name:productName, price:productPrice})
products.save().then(()=>console.log(' Product Created Successfully'))