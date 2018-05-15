import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';

import store from './src';

// Expose Redux store as a global object for debugging in development
if (process.env.NODE_ENV === 'development') {
  global.s = function() {
    return store
      .getState()
      .toJS();
  }
}

const Notes = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('notesApp', () => Notes);
