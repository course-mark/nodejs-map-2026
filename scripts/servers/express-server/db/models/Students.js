const mongoose = require('mongoose');

const Students = mongoose.model('Student', {
    name: {
        type: String,
        required: true
    }, rollNo: {
        type: String,
        required: true
    }
});

module.exports = Students