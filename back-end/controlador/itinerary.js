"use strict";

const Itinerary = require("../model/itinerary");
//const City = require("../model/city");

function getItinerary(req, res) {
  let itineraryId = req.params.cityId;

  //   Itinerary.find({ cityId: `${itineraryId}` }, (err, itinerary) => {
  //     if (err)
  //       res
  //         .status(500)
  //         .send({
  //           message: `Error relizar la consulta a la base de datos: ${err}`
  //         });
  //     if (!itinerary)
  //       return res
  //         .status(404)
  //         .send({
  //           message: "No existen itinerarios para la ciudad seleccionada "
  //         });

  //     res.send(200, { itinerary });
  //   });

  Itinerary.find({})
    .populate("City")
    .then(itinerarios => {
      res.status(200).send({ itinerarios });
    })
    .catch(err => {
      if (err) return 1;
    });
}

function getItineraries(req, res) {
  Itinerary.find({}, (err, Itineraries) => {
    if (err)
      res.status(500).send({
        message: `Error relizar la consulta a la base de datos: ${err}`
      });
    if (!Itineraries)
      return res.status(404).send({
        message: "No existen itinerarios para la ciudad seleccionada"
      });
  });
}

function saveItinerary(req, res) {
  console.log("POST /Itineraries");
  console.log(req.body);

  let itinerary = new Itinerary();

  itinerary.title = req.body.title;
  itinerary.profilePic = req.body.profilePic;
  itinerary.rating = req.body.rating;
  itinerary.duration = req.body.duration;
  itinerary.price = req.body.price;
  itinerary.hashtag = req.body.hashtag;
  itinerary.cityId = req.body.cityId;

  itinerary.save((err, itineraryStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar en la base de datos: ${err}` });

    res.status(200).send({ itinerary: itineraryStored });
  });
}

module.exports = {
  getItinerary,
  getItineraries,
  saveItinerary
};
