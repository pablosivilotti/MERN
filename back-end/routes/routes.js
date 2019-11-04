'use strict'

const express = require('express')
const cityCtrl = require('../controlador/city')
const api = express.Router()

api.get('/city', cityCtrl.getCities)
api.get('/city/:cityId', cityCtrl.getCity)
api.post('/city/', cityCtrl.saveCity)
api.put('/city/:cityId', cityCtrl.updateCity)
api.delete('/city/:cityId', cityCtrl.deleteCity)

// api.get('/cities', cities.getCities)

module.exports = api
