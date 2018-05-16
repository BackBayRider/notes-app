/* @flow */
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import type { Action } from './types.js';
import {
  CREATE_NOTE,
} from './action-types.js';

const view = (state: string = 'main', action: Action): string => {
  const { type } = action;

  switch (type) {
  case CREATE_NOTE:
    return 'create';
  default:
    return state;
  };

};

export default combineReducers({
  view,
});
