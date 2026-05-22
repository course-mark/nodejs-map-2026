const http = require('http')
const dataStore = require('./data-store.json')

const server = http.createServer((req, res) => {
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("Headers:", req.headers)
    let bodyData;
    req.on('data', (body) => {
        bodyData = JSON.parse(body.toString())
    })
    let resp;
    req.on('end', () => {
        if (req.method === "POST") {
            switch (req.url) {
                case '/students': {
                    console.log("Calling Create Student Function")
                    createStudent(bodyData)
                    res.end("Student Created")
                }
                    break;
                case '/products': {
                    console.log("Calling Create Product Function")
                    createProduct(bodyData)
                    res.end("Product Created")
                }
                    break;

                default:
                    break;
            }
        }
    })

    if (req.method === "GET") {
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
        sendHtmlResponse(resp, res)
        sendFileResponse('data-store.json', res)
    }

})

const convertJsonToHTMLTable = (json) => {
    const keys = Object.keys(json[0])

    let htmlResponse = ``
    htmlResponse += '<div>'
    htmlResponse += '<table>'

    htmlResponse += '<thead>'
    htmlResponse += '<tr>'
    htmlResponse += keys.map(key => `<th>${key}</th>`).join('')
    htmlResponse += '</tr>'
    htmlResponse += '</thead>'

    htmlResponse += '<tbody>'
    htmlResponse += json.map(entity => {

        const values = Object.values(entity)
        let row = `<tr>`
        row += values.map(value => `<td>${value}</td>`).join('')
        row += `</tr>`

        return row
    }).join('')

    htmlResponse += '</tbody>'

    htmlResponse += '</table>'
    htmlResponse += '</div>'
    return (htmlResponse)
}

server.listen(4000, () => {
    console.log("Server is running")
})

const fs = require('fs')

const fileData = fs.readFileSync('data-store.json', 'utf-8')
let fileJson = JSON.parse(fileData)
const createStudent = (dataStudent) => {
    const entityType = 'student'
    let lengthOfEntity = fileJson[entityType].length

    if (!fileJson[entityType][lengthOfEntity]) {
        fileJson[entityType][lengthOfEntity] = {}
    }

    fileJson[entityType][lengthOfEntity] = dataStudent

    const jsonstring = JSON.stringify(fileJson, null, 2)
    fs.writeFileSync('data-store.json', jsonstring)
    console.log(dataStudent)
}
const createProduct = (dataProduct) => {
    console.log(dataProduct)
}

function sendHtmlResponse(resp, res) {
    const html = convertJsonToHTMLTable(resp)
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end(html)
}
function sendFileResponse(fileName, res) {
    const fileData = fs.readFileSync(fileName, 'utf-8')
    res.writeHead(200, {
        'content-disposition': `attachment; filename=${fileName}`,
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(fileData)
    })
    res.end(fileData)
}
