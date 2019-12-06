const cityReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_CITY':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state, action.payload]
        case 'DELETE_CITY':
            return state.filter((city) => city.id !== action.id)
        case 'GET_CITIES':
            return [...state, action.payload]

        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default cityReducer