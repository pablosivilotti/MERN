const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const key = require("./config/config")
const User = require('./model/account')
const passport = require("passport")
const jwt = require("jsonwebtoken")
var GoogleStrategy = require('passport-google-oauth20').Strategy;


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.TOKEN_SECRET;

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        // User.findById(jwt_payload.id)
        User.findOne({email: jwt_payload.email })
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, 'false');
            })
            // .catch(err => console.log(err));
            .catch(err => done(err,null));
    })
);

const GOOGLE_CLIENT_ID = key.GOOGLE_ID
const GOOGLE_CLIENT_SECRET = key.GOOGLE_SECRET

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/login"
},
    function (accessToken, refreshToken, profile, done) {
        User.findOne({ googleID: profile.id })
            .then((currentUser) => {
                if (currentUser) {
                    return done(null, currentUser);
                } else {
                    new User({
                        googleID: profile.id,
                        username: profile.displayName
                    })
                        .save()
                        .then((newUser) => {
                            done(null, newUser)
                        }
                        );
                }
            })
    }
));

