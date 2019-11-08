import { handleActions } from 'redux-actions';
import { addCity, getCity } from '../actions/cityActions';

export default handleActions({
   [addCity] : (state, action) => {
       return [...state, action.payload];
   },

   [getCity] : (state, action) => {
       return action.payload;
   },
}, []);