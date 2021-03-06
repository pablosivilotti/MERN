import axios from "axios";
import urlServer from '../../components/constans'


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
  // console.log("getActivity ACTION")
  // console.log(itineraryId)

  return (dispatch) => {
    // console.log("RECOLECTANDO DATOS DE ACTIVIDADES")
    return axios.get(`${urlServer.urlServer}/city/activity/${itineraryId}`)
      .then((res) => {
        dispatch({ type: 'GET_ACTIVITY', payload: res.data.activity })
        // console.log("res.data.ACTIVITY")
        // console.log(res.data.activity)
      })
  }
}


export {
    addActivity, deleteActivity, getActivity
}