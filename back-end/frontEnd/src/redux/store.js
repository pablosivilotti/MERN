import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import city from './reducers/city';

const reducer = combineReducers({
    city,
    //otro_reducer,
});

const store = createStore(reducer, composeWithDevTools() , applyMiddleware(thunk));

export default store;