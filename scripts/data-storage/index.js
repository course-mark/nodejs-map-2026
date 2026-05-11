const entityType = process.argv[2]

const operationType = process.argv[3]


const [, , , , ...properties] = process.argv
let dataProperties = properties.filter(prop => {
    if (prop.includes(":")) {
        return true;
    }
})

let conditions = properties.filter(prop => {
    if (prop.includes("=")) {
        return true;
    }
})

let dataPropertiesInJson = dataProperties.map(prop => ({
    key: prop.split(":")[0],
    value: prop.split(":")[1]
}))

let conditionPropertiesInJson = conditions.map(prop => ({
    key: prop.split("=")[0],
    value: prop.split("=")[1]
}))
// check if Data Store exists
const fs = require('fs')

const fileData = fs.readFileSync('data-store.json', 'utf-8')
let fileJson = JSON.parse(fileData)

if (entityType === 'student') {
    switch (operationType) {
        case 'create':
        case 'add': {
            dataPropertiesInJson = dataPropertiesInJson.map(({ key, value }) => {
                if (key === "rollNo") {
                    if (!value) {
                        throw new Error("rollNo should not be empty student entity");
                    }
                    // apply schema validation for unique roll number
                    if (fileJson?.student?.map(({ rollNo, name }) => rollNo).includes(value)) {
                        throw new Error(`Roll number ${value} already exists.`);
                    }
                }
                if (key === "name" && !value) {
                    throw new Error("name should not be empty student entity");
                }
                return {
                    key: key,
                    value: value
                }
            })

            const keys = dataPropertiesInJson.map(prop => prop.key)
            // has name?
            if (!keys.includes('name')) {
                throw new Error("name is required for student entity");
            }
            if (!keys.includes('rollNo')) {
                throw new Error("rollNo is required for student entity");
            }
            break;
        }
        default:
            break;

    }
}


if (!fileJson[entityType]) {
    fileJson[entityType] = []
}
let lengthOfEntity = fileJson[entityType].length

if (operationType === 'add' || operationType === 'create') {
    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    dataPropertiesInJson.map(prop => {
        // fileJson.student[0] => {}
        // 1. fileJson.student[0].name = manjot
        // 2. fileJson.student[0].rollNo = 21
        fileJson[entityType][lengthOfEntity][prop.key] = prop.value
    })

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync('data-store.json', jsonstring)   
}
if (operationType === 'list') {
    console.log(fileJson[entityType])
}

if (operationType === 'delete') {

    const { key, value } = conditionPropertiesInJson[0]
    const existingEntityList = fileJson[entityType]
    const newList = existingEntityList.filter((entityObject) => {
        return entityObject[key] !== value
    })
    fileJson[entityType] = newList
}

if (operationType === 'edit') {
    const { key, value } = conditionPropertiesInJson[0]
    const existingEntityList = fileJson[entityType]
    const entityToEdit = existingEntityList.find((entityObject) => {
        return entityObject[key] === value

    })

    if (!entityToEdit) {
        throw new Error(`No entity found with ${key} = ${value}`)
    }

    dataPropertiesInJson.forEach(({ key, value }) => {
        entityToEdit[key] = value
    })
    
}

if (operationType === 'get') {
    const { key, value } = conditionPropertiesInJson[0]
    const existingEntity= fileJson[entityType]
    const entityToGet = existingEntity.find((entityObject)=> {
        return entityObject[key] === value
    })

console.log(entityToGet)    
}





