const fs = require('fs')
const child_process = require('child_process')

fs.writeFileSync('hello.txt', 'Hello, World!\nThis is a file created using Node.js.')
fs.writeFileSync('hello.js', 
    `let a = 3+4;
console.log(a);
    `)

// child_process.exec('node hello.js',(err,out)=>{
//     console.log(out)
// })

const out = child_process.execSync('node hello.js')
console.log(out.toString())