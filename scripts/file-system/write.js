const fs = require('fs')
const child_process = require('child_process')

fs.writeFileSync('hello.txt', 'Hello, World!\nThis is a file created using Node.js.')

for(let i=0; i<10000; i++){
    fs.writeFileSync(`hello${i}.txt`, `This is file number ${i}`)
}

fs.writeFileSync('hello.js', 
    `let a = 3+4;
console.log(a);
    `)

// child_process.exec('node hello.js',(err,out)=>{
//     console.log(out)
// })

const out = child_process.execSync('node hello.js')
console.log(out.toString())
