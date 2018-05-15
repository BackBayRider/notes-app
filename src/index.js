/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  level: {
    prevState: false,
    action: 'log',
    nextState: 'log',
  },
  colors: {
    title: () => '#2FCA8C',
    action: () => '#FF7450',
    nextState: () => '#FFD864',
  },
  collapsed: true,
  stateTransformer: s => s.toJS(),
});

import rootReducer from './store.js';
import rootEpic from './epics.js';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware)
);

export default store;
