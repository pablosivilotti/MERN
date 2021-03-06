'use strict'

const City = require ('../model/city');
// const FrontEnd = require ('../frontEnd/public/index.html')


function helloServer (req, res) {
  res.send('Bienvenido al Servidor' );
}

// function frontEnd (req,res){
//     res.redirect(FrontEnd)
// }

function getCity (req, res){
    let cityId = req.params.cityId

    City.findById(cityId, (err, city) => {
        if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
        if (!city) return res.status(404).send({message: 'No existen ciudades ' + req.params})
    
        res.status(200).send({ city });
    })
}

function getCities (req, res){
    City.find({},(err, allCities) => {
        if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
        if (!allCities) return res.status(404).send({message: 'No existen ciudades'})
      
        res.status(200).send({ allCities });
    })
}

function saveCity(req, res){
    console.log('POST /cities');
    console.log(req.body);
    
    let city = new City()
    city.name = req.body.name;
    city.country = req.body.country;
  
    city.save((err, cityStored) =>{
      if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
      
      res.status(200).send({city: cityStored})
    })
}

function updateCity(req, res){
    let cityId = req.params.cityId
    let update = req.body

    City.findByIdAndUpdate(cityId, update, (err, cityUpdated) =>{
        if (err) res.status(500).send({message: `Error al actualizar en la base de datos: ${err}`})
      
      res.status(200).send({city: cityUpdated})
    })
}
function deleteCity(req, res){
    let cityId = req.params.cityId

    City.findById(cityId, (err, city) => {
        if (err) res.status(500).send({message: `Error al intentar borrar la ciudad: ${err}`})
        
        city.remove(err => {
            if (err) res.status(500).send({message: `Error al intentar borrar la ciudad: ${err}`})
            res.status(200).send({message: 'La ciudad fue eliminada'})
        })
    })
}

module.exports = {
    // frontEnd,
    helloServer,
    getCity,
    getCities,
    saveCity,
    updateCity,
    deleteCity
}
