const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/app1-new').then(()=>{
    console.log("MongoDB connected")
})