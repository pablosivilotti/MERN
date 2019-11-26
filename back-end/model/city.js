'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = Schema({
        name:    String,
        country: String,
        url:     String,
});

module.exports = mongoose.model('City', CitySchema)