import axios from "axios";
import urlServer from '../../components/constans'

function addAccount(data) {
    return async(dispatch, getState) => {
  
      if (getState().length > 0) return;

      return await axios.post(`${urlServer.urlServer}/accounts`,data)
        .then((res) => {
          dispatch({ type: 'ADD_ACCOUNT', payload: res.data.account })
          
          console.log("CUENTA AGREGADA")
          console.log(res.data.account)
        })
        .catch(err => alert('Error al intentar crear la cuenta!'+ err));

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

function login(data) {

  // console.log("data accountAction")
  // console.log(data)
  return async(dispatch, getState) => {

    if (getState().length > 0) return;

    return await axios.post(`${urlServer.urlServer}/login`, data)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.data.token })
        
        console.log("Login exitoso")
        console.log(res.data)
      })
      .catch(err => alert('USUARIO O CONTRASEÑA INCORRECTOS!'));

    }
}
  
  export {
    addAccount,
    deleteAccount,
    getAccount,
    login
  }
