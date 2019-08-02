import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import adminReducer from "./adminReducer";
import propertiesReducer from "./propertiesReducer";
import renterReducer from "./renterReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  admin: adminReducer,
  properties: propertiesReducer,
  renters: renterReducer
});

const persistconfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistconfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(promiseMiddleware)
  )
);

export const persistor = persistStore(store)
