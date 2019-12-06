'use strict'

const express = require('express')
const cityCtrl = require('../controlador/city')
const itineraryCtrl = require('../controlador/itinerary')
const imagesCtrl = require('../controlador/imgCity'); 
const activityCtrl = require('../controlador/activity'); 
const accountCtrl = require('../controlador/account'); 

const { check, validationResult } = require('express-validator');


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

api.get('/accounts', accountCtrl.getAccounts)
api.post('/accounts/', [check('email', 'Invalid Email adress').isEmail(),
                        check('password','Password must be min 5 characters').isLength({ min: 5 })],accountCtrl.saveAccount)

api.post('/login/', [check('email', 'Invalid Email adress').isEmail(),
                        check('password','Password must be min 5 characters').isLength({ min: 5 })],accountCtrl.login)



module.exports = api

