const activityReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_ACTIVITY':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state,action.payload]
        case 'DELETE_ACTIVITY':
            return state.filter((activity) => activity.id !== action.id)
        case 'GET_ACTIVITY':
            return [action.payload]
        
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default activityReducer