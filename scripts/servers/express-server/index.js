const express = require('express');
const bodyParser = require('body-parser');
const studentRouter = require('./api/students/routes')
const productRouter = require('./api/products/routes')
const cors = require('cors')
const app = express();
const port = 4000;
require('./db')

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/students', studentRouter)
app.use('/products', productRouter)

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`)
})