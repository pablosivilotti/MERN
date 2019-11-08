import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import posts from './reducers/posts';
import comments from './reducers/comments';

const reducer = combineReducers({
    posts,
    comments,
});

const store = createStore(reducer, composeWithDevTools());

export default store;