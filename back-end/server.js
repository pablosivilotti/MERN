'use strict'

const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
const app = require('./app')
const config = require('./config/config')


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


