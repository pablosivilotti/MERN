const express = require('express')
const bodyParser = require('body-parser'); //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json

const app = express();
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/api',api)
app.get('/front', (req, res) =>{
    res.render('.')
})

module.exports = app