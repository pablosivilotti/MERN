'use strict'

const express = require('express')
const cityCtrl = require('../controlador/city')
const itineraryCtrl = require('../controlador/itinerary')
const api = express.Router()


api.get('/', cityCtrl.helloServer)
api.get('/cities', cityCtrl.getCities)
api.get('/city/:cityId', cityCtrl.getCity)
api.post('/city/', cityCtrl.saveCity)
api.put('/city/:cityId', cityCtrl.updateCity)
api.delete('/city/:cityId', cityCtrl.deleteCity)

api.get('/', itineraryCtrl.helloServer)
api.get('/cities', itineraryCtrl.getCities)
api.get('/city/:cityId', itineraryCtrl.getCity)
api.post('/city/', itineraryCtrl.saveCity)
api.put('/city/:cityId', itineraryCtrl.updateCity)
api.delete('/city/:cityId', itineraryCtrl.deleteCity)

module.exports = api

