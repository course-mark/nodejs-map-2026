const fs = require('fs')

const out = fs.readFileSync('hello.txt','utf-8')

console.log(out)