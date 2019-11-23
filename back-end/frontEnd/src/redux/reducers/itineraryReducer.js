const itineraryReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_ITINERARY':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state,action.payload]
        case 'DELETE_ITINERARY':
            return state.filter((itinerary) => itinerary.id !== action.id)
        case 'GET_ITINERARIES':
            return [action.payload]
        
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default itineraryReducer