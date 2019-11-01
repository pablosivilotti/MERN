const express = require('express');
// const mongo = require('mongodb'), //el driver para poder conectar a mongodb
const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
// const Schema = mongoose.Schema; //la clase que permite definir "esquemas" de documento
const bodyParser = require('body-parser'); //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json

//+srv://pablosivilotti:<INET-MERN>@mytinerary-sjs0f.mongodb.net/test?retryWrites=true&w=majority

const City = require ('./City');

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al Servidor' );
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/addCity', (req, res) => {
    res.send({cities: []});
});

app.get('/front', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/frontEnd/public/index.html'));
});

app.post('/addCity', (req, res) => {
  console.log('POST /addCity');
  console.log(req.body);
  
  let city = new City()
  city.name = req.body.name;
  city.country = req.body.country;

  city.save((err, cityStored) =>{
    if (err) res.status(500).send({messaje: 'Error al guardar en la base de datos'})
    
    res.status(200).send({city: cityStored})
  })
});

// app.post('/addCity', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening SERVER on port ${port}`));

//module.exports = server;
