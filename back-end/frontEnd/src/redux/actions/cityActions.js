import { createAction } from 'redux-actions';
import api from '../../client/client'

export const addCity = createAction('addCity');
export const getCities = createAction('getCities');
// export const getCitiesERR = createAction('getCitiesERR');

const getCities = () => {
    return async (dispatch) => {
        const response = await api.city.getCities();

        getCities(response.data)

        dispatch(getCities(response.data));
    };
}