const addCity = payload => ({
  type: 'ADD_CITY',
  payload: payload
})


const deleteCity = payload => ({
  type: 'DELETE_CITY',
  payload: payload
})

// export function getData() {
//   return function(dispatch) {
//     return fetch("http://localhost:5000/cities")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }


export {
  addCity, deleteCity
}