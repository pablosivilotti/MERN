import axios from "axios";

const addItinerary = payload => ({
  type: 'ADD_ITINERARY',
  payload: payload
})

const deleteItinerary = payload => ({
  type: 'DELETE_ITINERARY',
  payload: payload
})

//  function getItineraries(cityId) {
const getItineraries = (cityId) => {
  console.log("ITINERARY ACTION")
  console.log(cityId)

  return (dispatch, getState) => {
    if (getState().length > 0) return;
    
    return axios.get(`http://localhost:5000/itineraries/:${cityId}`)
      .then((res) => {
        dispatch({ type: 'GET_ITINERARIES', payload: res.data.Itineraries })
      })
  }
}


export {
  addItinerary, deleteItinerary, getItineraries
}