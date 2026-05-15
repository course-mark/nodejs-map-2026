const http = require('http')
const dataStore = require('./data-store.json')

const server = http.createServer((req, res) => {
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    console.log("Headers:", req.headers)

    req.on('data', (body) => {
        console.log(body.toString())
    })
    let resp;
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
    }

    // const html = `
    // <div>
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>name</th>
    //                 <th>rollno</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>Saman</td>
    //                 <td>21</td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // `
    // res.end(JSON.stringify(resp))
    // res.end(html)
    const html = convertJsonToHTMLTable(resp)
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end(html)


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
