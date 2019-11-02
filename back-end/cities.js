const express = require('express');
// const mongo = require('mongodb'), //el driver para poder conectar a mongodb
const mongoose = require('mongoose'); //el cliente para poder realizar consultas.
// const Schema = mongoose.Schema; //la clase que permite definir "esquemas" de documento
const bodyParser = require('body-parser'); //middleware para poder codificar datos enviados por POST en formato urlencoded, y para poder enviar el payload como json


app.get('/cities', (req, res) => {
    City.find({},(err, allCities) => {
      if (err) res.status(500).send({message: `Error relizar la consulta a la base de datos: ${err}`})
      if (!allCities) return res.status(404).send({message: 'No existen ciudades'})
    
      res.send(200, { allCities });
    })
    
  });


  app.post('/cities', (req, res) => {
    console.log('POST /cities');
    console.log(req.body);
    
    let city = new City()
    city.name = req.body.name;
    city.country = req.body.country;
  
    city.save((err, cityStored) =>{
      if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
      
      res.status(200).send({city: cityStored})
    })
  });