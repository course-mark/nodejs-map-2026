const path = require('path')


const finalDir = __dirname.split('/').slice(0,__dirname.split('/').length-1).join('/')

console.log(finalDir)

const finalpath = path.join(__dirname,'..','..')
console.log(finalpath)