const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PetsDB');

const catname = process.argv[2]

const Cat = mongoose.model('Cat', {
    name: {
        type: String,
        unique: true
    }
});
const kitty = new Cat({ name: catname });
kitty.save().then(() => console.log('meow'));

