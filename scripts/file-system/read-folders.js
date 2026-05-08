const fs = require('fs')
const path = require('path')
const pathToRead = path.join(__dirname, '..')

const folders = fs.readdirSync(pathToRead, {
    recursive: true,
    withFileTypes: true
})
const arrayOfFilesFolders = folders
    .filter(fileOrFolder => {
        const isFile = !fileOrFolder.isDirectory()
        const isDirectory = fileOrFolder.isDirectory()
        return isFile

    }).map(fileOrFolder => {
        return ({
            name: fileOrFolder.name,
            isDirectory: fileOrFolder.isDirectory()
        })
    })

console.log(arrayOfFilesFolders)