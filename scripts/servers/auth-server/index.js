const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/users/routes')
const authRouter = require('./api/auth/routes')
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

app.use('/users',userRouter)
app.use('/auth',authRouter)


app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`)
})