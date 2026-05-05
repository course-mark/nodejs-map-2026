const path = require('path')

const dirname = __dirname
const filepath = __filename
const cwd = process.cwd()
const dirbase = path.basename(dirname)
const filebase = path.basename(filepath)
const fileExtension = path.extname(filepath)

console.log({
    dirname,
    filepath,
    cwd,
    dirbase,
    filebase,
    fileExtension
})

const finalDir = __dirname.split('/').slice(0,__dirname.split('/').length-1).join('/')

console.log(finalDir)

const finalpath = path.join(__dirname,'..','..')
console.log(finalpath)