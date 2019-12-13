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
             return [action.payload.token]
        case 'LOGIN_GOOGLE':
            console.log('[AccountReducer] got an LOGIN_GOOGLE action!')
            return { ...state, token: action.payload, isAuthenticated: true, errorMessage: '' }
        
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default accountReducer