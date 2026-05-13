const http = require('http')
const dataStore = require('./data-store.json')

const server = http.createServer((req,res)=>{
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("Headers:", req.headers)

    req.on('data',(body)=>{
        console.log(body.toString())
    })
    let resp
    if(req.method==="GET"){
        switch (req.url) {
        case '/students':
                resp = dataStore.student
            break;
        case '/products':
                resp = dataStore.product
            break;
    
        default:
            break;
    }
    }
    res.end(JSON.stringify(resp))
})

server.listen(4000,()=>{
    console.log("Server is running")
})
