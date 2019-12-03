import axios from "axios";
import urlServer from '../../components/constans'

function addAccount(data) {
    return (dispatch, getState) => {
  
      if (getState().length > 0) return;

      return axios.post(`${urlServer.urlServer}/accounts`,data)
        .then((res) => {
          dispatch({ type: 'ADD_ACCOUNT', payload: res.data.account })
          console.log("CUENTA AGREGADA")
        })
    }
}
const deleteAccount = payload => ({
    type: 'DELETE_ACCOUNT',
    payload: payload
  })
  
function getAccount() {
    return (dispatch, getState) => {
  
      if (getState().length > 0) return;
  
      return axios.get(`${urlServer.urlServer}/accounts`)
        .then((res) => {
          dispatch({ type: 'GET_ACCOUNT', payload: res.data.account })
        })
    }
}
  
  export {
    addAccount,
    deleteAccount,
    getAccount
  }