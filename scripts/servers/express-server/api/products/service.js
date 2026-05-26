const fs = require('fs')
const path = require('path')
const dataStore = require('../../db/data-store.json')
const databaseFilePath = path.resolve(__dirname, '../../db/data-store.json')

const fileData = fs.readFileSync(databaseFilePath)
const fileJson = JSON.parse(fileData)
const createProduct = (dataProducts)=>{
    const entityType = 'products'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity]={}
    }

    fileJson[entityType][lengthOfEntity]=dataProducts
    let jsonstring=JSON.stringify(fileJson, null, 2)
    fs.writeFileSync(databaseFilePath , jsonstring)
    console.log(dataProducts)
}


const getProducts = ()=>{
    return dataStore.product
}

module.exports = {
    createProduct,
    getProducts
}