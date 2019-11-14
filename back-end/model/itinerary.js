
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = Schema({
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
    }
});

module.exports = mongoose.model('Itinerary', ItinerarySchema)