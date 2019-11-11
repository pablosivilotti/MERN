import { handleActions } from 'redux-actions';
import { addCityOK, getCitiesOK } from '../actions/cityActions';

export default handleActions({
   [addCityOK] : (state, action) => {
       return [...state, action.payload];
   },

   [getCitiesOK] : (state, action) => {
       return action.payload;
   },
}, []);