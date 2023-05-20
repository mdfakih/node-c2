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
    res.json({ "message": "Hello json" })
})


































module.exports = app;
