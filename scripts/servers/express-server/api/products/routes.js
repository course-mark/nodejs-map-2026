const express = require('express'); 
const fs = require('fs')
const path = require('path')
const productRouter = express.Router()
const databaseFilePath = path.resolve(__dirname, '../../db/data-store.json')

productRouter.get('/', (req, res) => {
    res.json(dataStore.product)
})
productRouter.post('/', (req, res) => {
    
    createProduct(req.body)
    
    res.send("Product Created")
})
// products end

const fileData = fs.readFileSync(databaseFilePath, 'utf-8')
let fileJson = JSON.parse(fileData)

const createProduct = (dataProduct) => {
    const entityType = 'product'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    fileJson[entityType][lengthOfEntity] = dataProduct

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync(databaseFilePath, jsonstring)
    console.log(dataProduct)
}

module.exports = productRouter
