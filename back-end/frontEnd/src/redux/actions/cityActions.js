import axios from "axios";
import urlServer from '../../components/constans'


const addCity = payload => ({
  type: 'ADD_CITY',
  payload: payload
})

const deleteCity = payload => ({
  type: 'DELETE_CITY',
  payload: payload
})

function getCities() {
  return (dispatch, getState) => {

    if (getState().length > 0) return;

    return axios.get(`${urlServer.urlServer}/cities`)
      .then((res) => {
        dispatch({ type: 'GET_CITIES', payload: res.data.allCities })
      })
  }
}

export {
  addCity, deleteCity, getCities
}