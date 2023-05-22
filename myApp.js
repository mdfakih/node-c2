let express = require('express')
let path = require('path')
let app = express()

console.log('Hello World!')

// app.get('/', function (req, res) {
//     res.send("Hello Express")
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './views', 'index.html'))
    // res.sendFile('index.html', { root: path.join(__dirname, './views') })
})

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function (req, res) {
    let string = 'Hello json'
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ "message": string.toUpperCase() })
    } else {
        res.json({ "message": string })
    }
})


































module.exports = app;
