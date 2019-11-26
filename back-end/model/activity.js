const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = Schema({
    image: {
        type: String
    },
    itineraryId: {
        type: Schema.Types.ObjectId,
        ref: "Itinerary"
    }
});

module.exports = mongoose.model('Activity', ActivitySchema)