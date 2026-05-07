const entityType = process.argv[2]

const operationType = process.argv[3]


const [, , , , ...properties] = process.argv
console.log(`Going to ${operationType} ${entityType} with properties `, properties)
let propertiesInJson = []

if (entityType === 'student') {
    propertiesInJson = properties.map(prop => {
        const key = prop.split(":")[0]
        const value = prop.split(":")[1]
        if (key === "rollNo" && !value) {
            throw new Error("rollNo should not be empty student entity");
        }
        if (key === "name" && !value) {
            throw new Error("name should not be empty student entity");
        }
        return {
            key: key,
            value: value
        }
    })
    console.log(propertiesInJson)

    const keys = propertiesInJson.map(prop => prop.key)

    // has name?
    if (!keys.includes('name')) {
        throw new Error("name is required for student entity");
    }
    if (!keys.includes('rollNo')) {
        throw new Error("rollNo is required for student entity");
    }
}

// check if Data Store exists
const fs = require('fs')

const fileData = fs.readFileSync('data-store.json', 'utf-8')
console.log(1, fileData)
const fileJson = JSON.parse(fileData)
console.log(2, fileJson)
// if (!fileJson.student) {
// if (!fileJson.product) {
// [] bracket notation is used when we want to access the property of an object using a variable. In this case, entityType is a variable that holds the name of the entity (e.g., "student" or "product"). By using fileJson[entityType], we can dynamically access the property of fileJson that corresponds to the value of entityType.
console.log(2.1, `${entityType} exists = ${fileJson[entityType]}`)
if (!fileJson[entityType]) {
    console.log(3, fileJson)
    fileJson[entityType] = []
    console.log(4, fileJson)
}
let lengthOfEntity = fileJson[entityType].length
console.log(6, lengthOfEntity)

if (operationType === 'add' || operationType === 'create') {
    if (!fileJson[entityType][lengthOfEntity]) {
        console.log(7, fileJson)
        fileJson[entityType][lengthOfEntity] = {}
        console.log(8, fileJson)
    }

    console.log(9, propertiesInJson)
    propertiesInJson.map(prop => {
        console.log(10, prop)
        // fileJson.student[0] => {}
        // 1. fileJson.student[0].name = manjot
        // 2. fileJson.student[0].rollNo = 21
        fileJson[entityType][lengthOfEntity][prop.key] = prop.value
        console.log(11, fileJson)
    })

    console.log(fileJson.student)

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync('data-store.json', jsonstring)
}