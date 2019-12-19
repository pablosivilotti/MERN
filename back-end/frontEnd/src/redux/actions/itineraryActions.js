import axios from "axios";
import urlServer from '../../components/constans'


const addItinerary = payload => ({
  type: 'ADD_ITINERARY',
  payload: payload
})

const deleteItinerary = payload => ({
  type: 'DELETE_ITINERARY',
  payload: payload
})

function getItineraries(cityId) {
// const getItineraries = (cityId) => {
  // console.log("ITINERARY ACTION")
  // console.log(cityId)

  return (dispatch) => {
    return axios.get(`${urlServer.urlServer}/itineraries/${cityId}`)
      .then((res) => {
        dispatch({ type: 'GET_ITINERARIES', payload: res.data.itinerary })
        // console.log("res.data.itinerary")
        // console.log(res.data.itinerary)
      })
  }
}

function addItineraryFav(json){
  console.log("ACTION FAV")
  console.log(json)
 
  return async (dispatch, getState) => {

        return await axios.post(`${urlServer.urlServer}/itinerariesFav/`, json)
        .then((res) => {
          
          console.log("res.data FAV")
          console.log(res.data)
          dispatch({ type: 'ADD_FAV', payload: res.data.itinerary })

        }).catch(console.log("ERROR FAV"));

}
}
  

export {
  addItinerary,
  deleteItinerary, 
  getItineraries,
  addItineraryFav
}