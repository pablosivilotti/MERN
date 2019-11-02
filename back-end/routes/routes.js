const express = require('express')
const cities = require('../City')

const api = express.Router()

api.get('/cities', cities.getCities)

module.exports = api
