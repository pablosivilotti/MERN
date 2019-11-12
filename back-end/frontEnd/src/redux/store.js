import { createStore, combineReducers } from 'redux';
import city from './reducers/city';

const reducer = combineReducers({
    city,
    //otro_reducer,
});

const store = createStore(reducer);

export default store;