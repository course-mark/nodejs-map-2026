const path = require('path')

const dirArray = __dirname.split('/')

const finalDir = dirArray.slice(0,dirArray.length-1)
console.log(finalDir.join('/'))

const finalpath = path.join(__dirname,'..')
console.log(finalpath)