import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  userReducer, 
  profileReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));