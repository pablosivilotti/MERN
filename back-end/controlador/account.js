const Account = require('../model/account');

function saveAccount(req, res) {
  console.log('POST /accounts');
  console.log(req.body);

  let account = new Account()
  account.username = req.body.username;
  account.password = req.body.password;
  account.email = req.body.email;
  account.firstName = req.body.firstName;
  account.lastName = req.body.lastName;
  account.photo = req.body.photo;
  account.terms = req.body.terms;
  account.country = req.body.country;

  account.save((err, accountStored) => {
    if (err) {
      console.log("ERROR: EL EMAIL "+ account.email +  " YA ESTA REGISTRADO")
      res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
    }

    else {
      res.status(200).send({ account: accountStored })
    }
  })
}

module.exports = {
  saveAccount
}
