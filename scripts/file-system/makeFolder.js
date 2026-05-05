const fs = require('fs')

fs.mkdirSync('folder1/folder1.1/folder1.1.1',{
    recursive: true
})
fs.mkdirSync('folder1/folder1.1/folder1.1.2',{
    recursive: true
})

fs.mkdirSync('folder1/folder1.2/folder1.2.1',{
    recursive: true
})
fs.mkdirSync('folder1/folder1.2/folder1.2.2',{
    recursive: true
})
