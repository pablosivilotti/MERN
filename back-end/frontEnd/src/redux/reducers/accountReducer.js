const jwtDecode = require('jwt-decode');

const accountReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [...state, action.payload]
        case 'DELETE_ACCOUNT':
            return state.filter((account) => account.id !== action.id)
        case 'GET_ACCOUNT':
            return [...state, action.payload]
        case 'LOGIN':
            var tokenDecode = jwtDecode(action.payload.token)

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("email", tokenDecode.email);
            localStorage.setItem("photo", tokenDecode.photo);

            return [action.payload]
        case 'LOGIN_GOOGLE':
            var tokenDecodeG = jwtDecode(action.payload)

            localStorage.setItem("token", action.payload);
            localStorage.setItem("email", tokenDecodeG.email);
            localStorage.setItem("photo", tokenDecodeG.photo);
            
            return [action.payload]
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default accountReducer