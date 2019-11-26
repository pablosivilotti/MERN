import axios from "axios";

const addActivity = payload => ({
  type: 'ADD_ACTIVITY',
  payload: payload
})

const deleteActivity = payload => ({
  type: 'DELETE_ACTIVITY',
  payload: payload
})

function getActivity(itineraryId) {
// const getItineraries = (cityId) => {
  console.log("getActivity ACTION")
  console.log(itineraryId)

  return (dispatch) => {
    
    return axios.get(`http://localhost:5000/city/activity/${itineraryId}`)
      .then((res) => {
        dispatch({ type: 'GET_ACTIVITIES', payload: res.data.activity })
        // console.log("res.data.itinerary")
        // console.log(res.data.itinerary)
      })
  }
}


export {
    addActivity, deleteActivity, getActivity
}