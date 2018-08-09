/* @flow */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'authentication',
  storage: storage,
  transforms: [createWhitelistFilter('authentication', 'token')],
  blacklist: ['galery']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store);
