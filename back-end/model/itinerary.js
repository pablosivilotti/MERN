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
    },
    cityId: {
         type: Schema.Types.ObjectId,
         ref: "City" 
    },
    userFav:
    {
        type: Schema.Types.ObjectId,
        ref: "Account" 
   }
});

module.exports = mongoose.model('Itinerary', ItinerarySchema)