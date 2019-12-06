const Account = require('../model/account');
const { validationResult } = require('express-validator');
const key = require('../config/config')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")


function saveAccount(req, res) {
  console.log('POST /accounts');
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10)

  let account = new Account()
  account.username = req.body.username;
  account.password = hashedPassword;
  // account.password = req.body.password;
  account.email = req.body.email;
  account.firstName = req.body.firstName;
  account.lastName = req.body.lastName;
  account.photo = req.body.photo;
  account.terms = req.body.terms;
  account.country = req.body.country;

  account.save((err, accountStored) => {
    if (err) {
      console.log("ERROR: EL EMAIL " + account.email + " YA ESTA REGISTRADO")
      // console.log("ERROR: EL EMAIL YA ESTA REGISTRADO")
      res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
    }

    else {
      res.status(200).send({ account: accountStored })
    }
  })
}

function login(req, res) {
  console.log('POST /login');
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // let login = new Account()
  // login.password = req.body.password;
  // login.email = req.body.email;
  // login.remember = req.body.remember;

  console.log("req.body")
  console.log(req.body)

  Account.findOne({ email: req.body.email }, (err, user) => {
    console.log("account")
    console.log(user)
    if (err) res.status(500).send({ message: `Error relizar la consulta a la base de datos: ${err}` })

    if (!user) return res.status(404).send({ message: 'No existe la cuenta ' + req.body.email })

    else {

      // if (bcrypt.compareSync(req.body.password, user.password)) {
      //   const payload = {
      //     id: user.id,
      //     email: user.email,
      //   };
      //   const options = { expiresIn: 2592000 };
      //   jwt.sign(
      //     payload,
      //     key.TOKEN_SECRET,
      //     options,
      //     (err, token) => {
      //       if (err) {
      //         return res.json({
      //           success: false,
      //           token: "There was an error"
      //         });
      //       } else {
      //         return res.json({
      //           success: true,
      //           token: token
      //         });
      //       }
      //     })
      //   console.log("Contraseña ok")
      // } else {
      //   return res.status(400).send({ message: "CONTRASEÑA INCORRECTA" });
      // }
    //   console.log("account.Password")
    //   console.log(user.password)
    //   // console.log(account)
      res.status(200).send({ user });
    }
  })
}

function getAccounts(req, res) {
  Account.find({}, (err, allAccounts) => {
    if (err) res.status(500).send({ message: `Error relizar la consulta a la base de datos: ${err}` })
    if (!allAccounts) return res.status(404).send({ message: 'No existen cuentas' })

    res.status(200).send({ allAccounts });
  })
}


module.exports = {
  saveAccount,
  login,
  getAccounts
}
