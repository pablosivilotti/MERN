import { createStore, combineReducers } from 'redux';
import CityReducer from './reducers/city';

const reducer = combineReducers({
    CityReducer,
    //otro_reducer,
});

const store = createStore(reducer);

export default store;