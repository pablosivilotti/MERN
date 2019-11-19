const cityReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_CITY':
            // console.log("action.payload")
            // console.log(action.payload)
            return [...state,action.payload]
        case 'DELETE_CITY':
            return state.filter((city) => city.id !== action.id)
<<<<<<< HEAD
        case 'GET_CITY':
            return action.payload
        // case 'EDIT_city':
=======
        case 'GET_CITIES':
            return [...state,action.payload]
        
            // case 'EDIT_CITY':
>>>>>>> Sprint_2
        //     return state.map((city) => city.id === action.id ? { ...city, editing: !city.editing } : city)
        // case 'UPDATE':
        //     return state.map((city) => {
        //         if (city.id === action.data.id) { 
        //             return {
        //                 ...city,
        //                 name: action.data.name,
        //                 country: action.data.country,
        //                 editing: !city.editing
        //             }
        //         } else return city;
        //     })
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}

export default cityReducer