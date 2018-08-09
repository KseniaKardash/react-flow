/* @flow */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppContainer from "./containers/AppContainer";
import {store, persistor} from './store/store';

const root = document.getElementById('root');
if (root == null) {
  throw new Error("no root element");
} else
  render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer/>
    </PersistGate>
  </Provider>, root
);
