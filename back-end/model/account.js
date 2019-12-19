const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');


const AccountSchema = Schema({
        username: String,
        password: {
                type: String,
        },
        email: {
                type: String,
                unique: true,
                require: true,
                lowercase: true
        },
        firstName: String,
        lastName: String,
        photo: String,
        terms: Boolean,
        country: String,
        googleID:String
        // favouritesItin: {
        //         type: Schema.Types.ObjectId,
        //         ref: "Itinerary" 
        //    }
});

// AccountSchema.pre('save', function(next) {
//         let account = this
//         if (account.isModified("password")){
//                 bcrypt.genSalt(10, function(err, salt){
//                         bcrypt.hash(account.password, salt, null, function(err, hash){
//                                 account.password = hash
//                                 next()
//                         })
//                 })
//         } else {
//                 next()
//         }
        
// })

module.exports = mongoose.model('Account', AccountSchema)