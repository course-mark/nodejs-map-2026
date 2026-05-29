const mongoose = require('mongoose');

const Students = mongoose.model('Student', { name: String, rollNo: String });

module.exports = Students