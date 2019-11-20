import axios from "axios";

const addItinerary = payload => ({
  type: 'ADD_ITINERARY',
  payload: payload
})

const deleteItinerary = payload => ({
  type: 'DELETE_ITINERARY',
  payload: payload
})

function getItineraries() {
  return (dispatch, getState) => {

    if (getState().length > 0) return;

    return axios.get('http://localhost:5000/itineraries')
      .then((res) => {
        dispatch({ type: 'GET_ITINERARIES', payload: res.data.Itineraries })
      })
  }
}

//  AGREGAR GET POR ID DE CIUDADES (cityId)

export {
  addItinerary, deleteItinerary, getItineraries
}