'use strict'

const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
const app = require('./app')
const config = require('./config/config')

const port = process.env.PORT || 5000;

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos exitosa!")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(config.port, () => {
            console.log(`Servidor corriendo en http://localhost:${config.port}`);
        });
    })
    // Si no se conecta correctamente mostramos el error
    .catch(err => console.log('Error en la conexion a la base de datos : ' + err));



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




