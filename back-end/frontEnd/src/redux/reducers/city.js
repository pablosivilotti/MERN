export default cityReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_city':
            return [...state,action.data]
        case 'DELETE_city':
            return state.filter((city) => city.id !== action.id)
        case 'EDIT_city':
            return state.map((city) => city.id === action.id ? { ...city, editing: !city.editing } : city)
        case 'UPDATE':
            return state.map((city) => {
                if (city.id === action.data.id) { 
                    return {
                        ...city,
                        name: action.data.name,
                        country: action.data.country,
                        editing: !city.editing
                    }
                } else return city;
            })
        default:
            return state;  //SIEMPRE TIENE QUE ESTAR
    }
}
