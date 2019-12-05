const Login = require('../model/login');
const { check, validationResult } = require('express-validator');


function postLogin(req, res) {
  console.log('POST /login');
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let login = new Login()
  login.password = req.body.password;
  login.email = req.body.email;
  login.remember = req.body.remember;

  
  login.findOne({email: req.body.email.toLowerCase()}, function(err, user) { 
    
    if (!err) {
      console.log("USUARIO O CONTRASEÑA INCORRECTO")
   
      res.status(500).send({ message: `Error en el login: ${err}` })
    }

    else {
      res.status(200).send({token: service.createToken(user)})
    }
  })
}

module.exports = {
    postLogin
}
