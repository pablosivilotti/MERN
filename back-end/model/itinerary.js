
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    profilePic: {
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    },
    hashtag: {
        type: Array
    },
    cityId: {
        type: String
    }
});

module.exports = mongoose.model('Itinerary', ItinerarySchema)