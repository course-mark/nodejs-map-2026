const crypto = require('crypto')
global.crypto = crypto

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PetsDB');

const Cat = mongoose.model('Cat', {
    name: {
        type: String,
        unique: true
    }
});

(async (params) => {
    const cats = await Cat.find({}).exec()   
    console.log(cats)
})()