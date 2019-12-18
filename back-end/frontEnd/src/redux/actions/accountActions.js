import axios from "axios";
import urlServer from '../../components/constans'
// const jwtDecode = require('jwt-decode');



function addAccount(data) {
  return async (dispatch, getState) => {

    if (getState().accountReducer.length > 0) return;

    return await axios.post(`${urlServer.urlServer}/accounts`, data)
      .then((res) => {
        dispatch({ type: 'ADD_ACCOUNT', payload: res.data.account })

        // console.log("CUENTA AGREGADA")
        // console.log(res.data.account)
      })
      .catch(err => alert('Error al intentar crear la cuenta!' + err));

  }
}


const deleteAccount = payload => ({
  type: 'DELETE_ACCOUNT',
  payload: payload
})

function getAccount() {
  return (dispatch, getState) => {

    if (getState().accountReducer.length > 0) return;

    return axios.get(`${urlServer.urlServer}/accounts`, {
      headers: {
        Authorization: 'bearer ' + getState().accountReducer.token 
      }
    })
      .then((res) => {
        dispatch({ type: 'GET_ACCOUNT', payload: res.data.account })
      })
  }
}

export const currentUser = ()=>{
  return async (dispatch)=>{

   await axios.get(`${urlServer.urlServer}/current_user`)
   .then((res)=>{
      dispatch({type:'CURRENT_USER',payload: res.data})
      
      // console.log("USUARIO ACTUAL: ")
      // console.log(res)
   })

  }
}

function login(data) {

  // console.log("data accountAction")
  // console.log(data)
  return async (dispatch, getState) => {

    if (getState().accountReducer.length > 0) return;

    return await axios.post(`${urlServer.urlServer}/login`, data)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.data })

        // console.log("Login exitoso")
        // console.log(res.data)
      })
      .catch(err => alert('USUARIO O CONTRASEÑA INCORRECTOS!'));

  }
}

function loginGoogle() {

  return async (dispatch, getState) => {
    
    axios.get(`${urlServer.urlServer}/auth/google/callback`)
      .then((res) => {
      })
      .catch(err => alert('USUARIO O CONTRASEÑA INCORRECTOS!'));
  }
}

function storeTokenDecode(token){
  return {type: 'LOGIN_GOOGLE', payload: token}
}

export {
  addAccount,
  deleteAccount,
  getAccount,
  login,
  loginGoogle,
  storeTokenDecode
}
