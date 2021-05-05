import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import profileReducer from './profileReducer'


const rootReducer = combineReducers({
  userReducer, 
  profileReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));