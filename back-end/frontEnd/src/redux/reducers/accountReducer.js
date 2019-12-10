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
        case 'LOGIN':
             return [action.payload.token]
        
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default accountReducer