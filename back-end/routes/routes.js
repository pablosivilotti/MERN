'use strict'

const express = require('express')
const cityCtrl = require('../controlador/city')
const itineraryCtrl = require('../controlador/itinerary')
const imagesCtrl = require('../controlador/imgCity'); 
const activityCtrl = require('../controlador/activity'); 
const accountCtrl = require('../controlador/account'); 
const passport = require('../passport')

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
api.get('/account', authenticateJwt, accountCtrl.getAccount)
api.post('/accounts/', [check('email', 'Invalid Email adress').isEmail(),
                        check('password','Password must be min 5 characters').isLength({ min: 5 })],accountCtrl.saveAccount)

api.post('/login/', [check('email', 'Invalid Email adress').isEmail(),
                    check('password','Password must be min 5 characters').isLength({ min: 5 })],accountCtrl.login)

api.get('/loginGoogle', accountCtrl.loginGoogle)

api.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

api.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  });


function authenticateJwt(req, res, next) {
  passport.authenticate('jwt', function(err, user, info) {
    if (err) return next(err);
    if (!user) return res.redirect('./');   //en caso de error voy a esta pagina
    req.user = user;
    next();
  })(req, res, next);
}

module.exports = api

