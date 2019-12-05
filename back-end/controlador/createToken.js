const key = require ('..config/config')
const jwt = require ("jsonwebtoken");

// exports.createToken = function(user) {
//     var payload = {
//       sub: user._id,
//     };
//     return jwt.encode(payload, config.TOKEN_SECRET);
//   };