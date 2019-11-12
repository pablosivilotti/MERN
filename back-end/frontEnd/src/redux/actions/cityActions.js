const addCity = payload => ({
  type: 'ADD_CITY',
  payload: payload
})


const deleteCity = payload => ({
  type: 'DELETE_CITY',
  payload: payload
})



export {
  addCity, deleteCity
}