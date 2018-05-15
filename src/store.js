/* @flow */
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import type { Action } from './types.js';

const defaultViewState = Map({
  view: 'main'
});

type stateType = Map<string, string>;

const view = (state: stateType = defaultViewState, action: Action): stateType => {
  const { type, payload } = action;

  switch (type) {
  default:
    return state;
  };

};

export default combineReducers({
  view,
});
