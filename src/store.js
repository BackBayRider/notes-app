/* @flow */
import { combineReducers } from 'redux-immutable';
import { Map, OrderedMap } from 'immutable';

import type { Action } from './types.js';
import {
  ROUTES,
  CREATE_NOTE,
  RETURN_HOME,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
  VIEW_NOTE,
} from './constants.js';

const route = (state = ROUTES.HOME, action: Action): any => {
  const { type } = action;

  switch (type) {
  case CREATE_NOTE:
    return ROUTES.CREATE;
  case VIEW_NOTE:
    return ROUTES.VIEW;
  case RETURN_HOME:
  case SAVE_NOTE_SUCCESS:
    return ROUTES.HOME;
  default:
    return state;
  };

};

const view = (state: ?string = null, action: Action): ?string => {
  const { type, payload } = action;

  switch (type) {
  case VIEW_NOTE:
    return payload.id;
  default:
    return state;
  };

}

const notes = (state: OrderedMap<string, any> = OrderedMap(), action: Action): OrderedMap<string, any> => {
  const { type, payload } = action;

  switch (type) {
  case SAVE_NOTE_SUCCESS:
    return state.set(payload.id, payload);
  default:
    return state;
  };

};

export default combineReducers({
  route,
  view,
  notes,
});
