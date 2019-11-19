import axios from "axios";

<<<<<<< HEAD

=======
>>>>>>> Sprint_2
const addCity = payload => ({
  type: 'ADD_CITY',
  payload: payload
})

const deleteCity = payload => ({
  type: 'DELETE_CITY',
  payload: payload
})

function getCities() {
<<<<<<< HEAD
  return (dispatch) => {
    axios.get("http://localhost:5000/cities").then(res => {
      const cities = res.data.allCities.map(obj => ({
        id: obj._id,
        name: obj.name,
        country: obj.country
      }));
      dispatch({
        type: 'GET_CITY',
        payload: cities
      })

    })
=======
  return (dispatch, getState) => {

    if (getState().length > 0) return;

    return axios.get('http://localhost:5000/cities')
      .then((res) => {
        dispatch({ type: 'GET_CITIES', payload: res.data.allCities })
      })
>>>>>>> Sprint_2
  }
}

export {
  addCity, deleteCity, getCities
}