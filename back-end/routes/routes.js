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

api.get('/itineraries', itineraryCtrl.getItineraries)
api.get('/itinerary/:cityId', itineraryCtrl.getItinerary)
api.post('/itinerary/', itineraryCtrl.saveItinerary)

module.exports = api

