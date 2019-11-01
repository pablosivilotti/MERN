var mongoose = require('mongoose');
// *Cargamos el fichero server.js con la configuración de Express
var server = require('./server');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos


mongoose.connect('mongodb+srv://pablosivilotti:<INET-MERN>@mytinerary-sjs0f.mongodb.net/test?retryWrites=true&w=majority',  { useMongoClient: true})
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente")
    
        // CREAR EL SERVIDOR WEB CON NODEJS
        server.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3800");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));


    
// const server = 'mongodb+srv://pablosivilotti:<INET-MERN>@mytinerary-sjs0f.mongodb.net/test?retryWrites=true&w=majority'; // REPLACE WITH YOUR DB SERVER
// const database = 'spirnt2db';      // REPLACE WITH YOUR DB NAME

//      mongoose.connect(`mongodb://${server}/${database}`)
//        .then(() => {
//          console.log('Database connection successful')
//        })
//        .catch(err => {
//          console.error('Database connection error')
//        })
