import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import adminReducer from './adminReducer';
import propertiesReducer from './propertiesReducer';
import renterReducer from './renterReducer';

const rootReducer = combineReducers({
  admin: adminReducer,
  properties: propertiesReducer,
  enters: renterReducer
});
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)));
