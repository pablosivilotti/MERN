import axios from "axios";

const addCity = payload => ({
  type: 'ADD_CITY',
  payload: payload
})

const deleteCity = payload => ({
  type: 'DELETE_CITY',
  payload: payload
})

function getCities() {
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
  }
}

export {
  addCity, deleteCity, getCities
}