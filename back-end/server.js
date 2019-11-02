const express = require('express');
const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
const bodyParser = require('body-parser'); //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json

const app = express();
const port = process.env.PORT || 5000;

const CityCtrl = require ('./controlador/city')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/city', CityCtrl.getCities)
app.get('/api/city/:cityId', CityCtrl.getCity)
app.post('/api/city/', CityCtrl.saveCity)
app.put('/api/city/:cityId', CityCtrl.updateCity)
app.delete('/api/city/:cityId', CityCtrl.deleteCity)

mongoose.connect('mongodb+srv://pablosivilotti:INET-MERN@mytinerary-sjs0f.mongodb.net/sprint2db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos exitosa!")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:5000");
        });
    })
    // Si no se conecta correctamente mostramos el error
    .catch(err => console.log(err));



// app.get('/', (req, res) => {
//   res.send('Bienvenido al Servidor' );
// });

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.get('/cities', (req, res) => {
//   City.find({},(err, allCities) => {
//     if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
//     if (!allCities) return res.status(404).send({message: 'No existen ciudades'})
  
//     res.send(200, { allCities });
//   })
  
// });

// app.get('/front', (req, res) => {
//   res.sendFile(path.join(process.cwd(), '/frontEnd/public/index.html'));
// });




