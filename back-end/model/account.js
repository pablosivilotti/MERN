const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = Schema({
        username: String,
        password: String,
        email: {
                type: String,
                required: true,
                unique: true
                },
        firstName: String,
        lastName: String,
        photo: String,
        terms: Boolean
});

module.exports = mongoose.model('Account', AccountSchema)
