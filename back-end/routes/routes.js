'use strict'

const express = require('express')
const cityCtrl = require('../controlador/city')
const itineraryCtrl = require('../controlador/itinerary')
const imagesCtrl = require('../controlador/imgCity'); 
const activityCtrl = require('../controlador/activity'); 

const api = express.Router()


api.get('/', cityCtrl.helloServer)
api.get('/cities', cityCtrl.getCities)
api.get('/city/:cityId', cityCtrl.getCity)
api.post('/city/', cityCtrl.saveCity)
api.put('/city/:cityId', cityCtrl.updateCity)
api.delete('/city/:cityId', cityCtrl.deleteCity)

api.get('/itineraries', itineraryCtrl.getItineraries)
api.get('/itineraries/:cityId', itineraryCtrl.getItinerary)
api.post('/itineraries/', itineraryCtrl.saveItinerary)

api.get('/city/image/:cityId?',imagesCtrl.getImgCity)

api.get('/city/activity/:itineraryId?',activityCtrl.getActivity)
api.get('/activities', activityCtrl.getActivities)
api.post('/activities/', activityCtrl.saveActivity)



module.exports = api

