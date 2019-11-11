import { createAction } from 'redux-actions';
import api from '../../client/client'

export const addCityOK = createAction('addCityOK');
export const getCitiesOK = createAction('getCitiesOK');
// export const getCitiesERR = createAction('getCitiesERR');

export const getCities = () => {
    return async (dispatch) => {
        try {
            
            const response = await api.city.get();
    
            dispatch(getCitiesOK(response.data));
       
        } catch (error) {
            console.log("ERROR EN LA ACCION GETCITIES")
        } 
    };
}

export const addCity = (data) => {
    return async (dispatch) => {
        try {
            
            const response = await api.city.post(data);
    
            dispatch(addCityOK(response.data));
       
        } catch (error) {
            console.log("ERROR EN LA ACCION ADDCITY")
        } 
    };
}

