import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CityReducer from './reducers/city';

const reducer = combineReducers({
    CityReducer,
    //otro_reducer,
});

const store = createStore(reducer, applyMiddleware(thunk));


export default store;