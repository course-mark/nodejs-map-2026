const mongoose = require('mongoose');

const Users = mongoose.model('User', {
    name: {
        type: String,
        required: true
    }, 
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Users