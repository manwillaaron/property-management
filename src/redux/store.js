import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import adminReducer from './adminReducer';
import propertiesReducer from './propertiesReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  properties: propertiesReducer
});
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
