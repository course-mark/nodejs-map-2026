const express = require('express');
const dataStore = require('./data-store.json')
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World")
})

// students start
app.get('/students', (req, res) => {
    res.json(dataStore.student)
})
app.post('/students', (req, res) => {
    
    
    createStudent(req.body)
    
    res.send("Student Created")
    
})
// students end


// products start
app.get('/products', (req, res) => {
    res.json(dataStore.product)
})
app.post('/products', (req, res) => {
    
    createProduct(req.body)
    
    res.send("Product Created")
})
// products end

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`)
})


const fs = require('fs')

const fileData = fs.readFileSync('data-store.json', 'utf-8')
let fileJson = JSON.parse(fileData)
const createStudent = (dataStudent) => {
    const entityType = 'student'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    fileJson[entityType][lengthOfEntity] = dataStudent

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync('data-store.json', jsonstring)
    console.log(dataStudent)
}
const createProduct = (dataProduct) => {
    const entityType = 'product'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    fileJson[entityType][lengthOfEntity] = dataProduct

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync('data-store.json', jsonstring)
    console.log(dataProduct)
}