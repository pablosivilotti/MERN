const express = require('express');
// const mongo = require('mongodb'), //el driver para poder conectar a mongodb
// const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
// const Schema = mongoose.Schema; //la clase que permite definir "esquemas" de documento
const bodyParser = require('body-parser'); //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json
const path = require("path");

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
// .catch((err)=>{console.log(err); process.exit(1)});

//+srv://pablosivilotti:<Pablito1.>@mytinerary-sjs0f.mongodb.net/test?retryWrites=true&w=majority

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenido al Servidor' );
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/front', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/frontEnd/public/index.html'));
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
