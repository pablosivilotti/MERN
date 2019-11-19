'use strict'

const Itinerary = require ('../model/itinerary');


function getItinerary (req, res){
    let itineraryId = req.params.itineraryId

    Itinerary.findById(itineraryId, (err, itinerary) => {
        if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
        if (!itinerary) return res.status(404).send({message: 'No existen ciudades'})
    
        res.send(200, { itinerary });
    })
}

function getItineraries (req, res){
    Itinerary.find({},(err, allItineraries) => {
        if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
        if (!allItineraries) return res.status(404).send({message: 'No existen ciudades'})
      
        res.send(200, { allItineraries });
    })
}

function saveItinerary(req, res){
    console.log('POST /Itineraries');
    console.log(req.body);
    
    let Itinerary = new Itinerary()
    Itinerary.name = req.body.name;
    Itinerary.country = req.body.country;
  
    Itinerary.save((err, ItineraryStored) =>{
      if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
      
      res.status(200).send({Itinerary: ItineraryStored})
    })
}


module.exports = {
    getItinerary,
    getItineraries,
    saveItinerary
}
