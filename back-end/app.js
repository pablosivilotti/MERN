'use strict'

const express = require('express')
const bodyParser = require('body-parser') //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json
const app = express()
const api = require('./routes/routes')
const cors = require('cors')
const passport = require ("./passport")

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(passport.initialize())
app.use(passport.session())
app.use(cors()) // Use this after the variable declaration
app.use('/',api)

module.exports = app
