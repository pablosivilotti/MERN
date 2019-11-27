import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './reducers/cityReducer';
import itineraryReducer from './reducers/itineraryReducer';
import activityReducer from './reducers/activityReducer';

const reducer = combineReducers({
    cityReducer,
    itineraryReducer,
    activityReducer
    //otro_reducer,
});

const store = createStore(reducer, applyMiddleware(thunk));


export default store;