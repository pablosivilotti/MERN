const accountReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_ACCOUNT':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state,action.payload]
        case 'DELETE_ACCOUNT':
            return state.filter((account) => account.id !== action.id)
        case 'GET_ACCOUNT':
            return [...state,action.payload]
        case 'CURRENT_USER':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state,action.payload]
        case 'LOGIN':
            // console.log("action.payload LOGIN REDUCER")
            // console.log(action.payload)
            localStorage.setItem("token", action.payload.token);
            console.log("token local storage")
            console.log(localStorage.getItem('token'))

            // DECODIFICAR EL TOKEN Y CREAR UN PERFIL DE USUARIO CON LOS DATOS PARA DESPUES PODER CONECTAR LOS COMPONENTES A ESTE REDUCER Y USARLOS DE CUALQUIER LADO
             return [action.payload.token]
        // case 'LOGIN_GOOGLE':
        //     // console.log('[AccountReducer] LOGIN_GOOGLE TOKEN:', action.payload)
        //     localStorage.setItem("token", action.payload);
        //     // console.log("localStorage")
        //     // console.log(localStorage.token)
        //     console.log("token local storage")
        //     console.log(localStorage.getItem('token'))

        //     return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default accountReducer