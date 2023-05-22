let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')


console.log('Hello World!')

app.use(function (req, res, next) {
    console.log('hit');
    bodyParser.urlencoded({ extended: false })
    next()
})

app.get('/name', (req, res) => {
    let { first, last } = req.query
    res.json({ name: `${first} ${last}` })
})

// app.get('/:word/echo', function (req, res) {
//     res.send({ echo: req.params.word })
// })

// app.get('/', function (req, res) {
//     res.send("Hello Express")
// })

// app.use(function (req, res, next) {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     // console.log(req.method + " " + req.path + " - " + req.ip);
//     next()
// })

// app.get('/now', function (req, res, next) {
//     req.time = new Date().toString()
//     next()
// }, function (req, res) {
//     res.send({ time: req.time })
// })

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, './views', 'index.html'))
//     // res.sendFile('index.html', { root: path.join(__dirname, './views') })
// })

// app.use('/public', express.static(__dirname + '/public'))

// app.get('/json', function (req, res) {
//     let string = 'Hello json'
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//         res.json({ "message": string.toUpperCase() })
//     } else {
//         res.json({ "message": string })
//     }
// })


































module.exports = app;
