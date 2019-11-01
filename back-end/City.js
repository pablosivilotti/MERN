const mongoose  = require('mongoose'); 

// db = mongoose.connect('mongodb://localhost/mongosse');
// const app = module.exports = express.createServer();

const Schema = mongoose.Schema;

const CitySchema = new Schema({
        name     : String,
        country  : String,
});

//Asociamos el modelo
// mongoose.model('City', CitySchema);
// var datos = mongoose.model('Datos');


module.exports = mongoose.model('City', CitySchema)