const fs = require('fs')
let fileData;

try {
    fileData = fs.readFileSync('data.json', 'utf-8')
} catch (error) {
    console.error("Something went wrong while reading the file")
}

console.log({ fileData })

let fileDataInJSON;


try {
    fileDataInJSON = JSON.parse(fileData)
} catch (error) {
    console.error("Something went wrong while parsing the JSON")
}
console.log({ fileDataInJSON })