'use strict'

const express = require('express')
const bodyParser = require('body-parser') //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json
const app = express()
const api = require('./routes/routes')
const cors = require('cors')
// const expressValidator = require('express-validator')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cors()) // Use this after the variable declaration
// app.use(expressValidator())
app.use('/',api)


// app.get('/front', (req, res) =>{
//     res.render('.')
// })

module.exports = app