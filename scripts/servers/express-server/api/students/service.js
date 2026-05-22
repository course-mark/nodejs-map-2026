const fs = require('fs');
const path = require('path')
const dataStore = require('../../db/data-store.json')
const databaseFilePath = path.resolve(__dirname, '../../db/data-store.json')


const fileData = fs.readFileSync(databaseFilePath, 'utf-8')
let fileJson = JSON.parse(fileData)
const createStudent = (dataStudent) => {
    const entityType = 'student'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    fileJson[entityType][lengthOfEntity] = dataStudent

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync(databaseFilePath, jsonstring)
    console.log(dataStudent)
}

const getStudents = ()=>{
    return dataStore.student
}

module.exports = {
    createStudent,
    getStudents
}