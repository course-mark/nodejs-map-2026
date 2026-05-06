const entityType = process.argv[2]

const operationType = process.argv[3]


const [, , , , ...properties] = process.argv
console.log(`Going to ${operationType} ${entityType} with properties `, properties)
let propertiesInJson = []
if (entityType === 'student') {
    propertiesInJson = properties.map(prop => {
        const propertyName = prop.split(":")[0]
        const propertyValue = prop.split(":")[1]
        if (propertyName === "rollNo" && !propertyValue) {
            throw new Error("rollNo should not be empty student entity");
        }
        if (propertyName === "name" && !propertyValue) {
            throw new Error("name should not be empty student entity");
        }
        return {
            name: propertyName,
            value: propertyValue
        }
    })
    console.log(propertiesInJson)

    const propertyNames = propertiesInJson.map(prop => prop.name)

    // has name?
    if (!propertyNames.includes('name')) {
        throw new Error("name is required for student entity");

    }
    if (!propertyNames.includes('rollNo')) {
        throw new Error("rollNo is required for student entity");
    }
}

// check if Data Store exists
const fs = require('fs')

const fileData = fs.readFileSync('data-store.json', 'utf-8')
const fileJson = JSON.parse(fileData)
if (!fileJson.student) {
    fileJson.student = [{}]
}


if (operationType === 'add' || operationType === 'create') {
    propertiesInJson.map(prop => {
        // fileJson.student[0] => {}
        // 1. fileJson.student[0].name = manjot
        // 2. fileJson.student[0].rollNo = 21
        fileJson.student[0][prop.name] = prop.value
    })

    console.log(fileJson.student)

    const jsonstring = JSON.stringify(fileJson)
    fs.writeFileSync('data-store.json', jsonstring)
}