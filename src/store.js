/* @flow */
import { combineReducers } from 'redux-immutable';
import { Map, OrderedMap } from 'immutable';

import type { Action } from './types.js';
import {
  ROUTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DRAFT_NOTE,
  RETURN_HOME,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
  VIEW_NOTE,
} from './constants.js';

const route = (state = ROUTES.HOME, action: Action): any => {
  const { type } = action;

  switch (type) {
  case EDIT_NOTE:
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
  case RETURN_HOME:
  case SAVE_NOTE_SUCCESS:
    return null;
  case VIEW_NOTE:
    return payload.id;
  default:
    return state;
  };

}

const Draft = {
  title: '',
  content: '',
};

const draft = (state: Object = Draft, action: Action): Object => {
  const { type, payload } = action;

  switch (type) {
  case RETURN_HOME:
  case SAVE_NOTE_SUCCESS:
    return Draft;
  case EDIT_NOTE:
    return payload;
  case DRAFT_NOTE:
    return {
      ...state,
      [payload.field]: payload.text,
    };
    break;
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
  draft,
  notes,
});
