/* @flow */
import { Record } from 'immutable';

export const ROUTES = Record({
  HOME: 'HOME',
  CREATE: 'CREATE',
  VIEW: 'VIEW',
})();

export const INIT = 'INIT';
export const INIT_SUCCESS = 'INIT_SUCCESS';

export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';

export const RETURN_HOME = 'RETURN_HOME';

export const SAVE_NOTE = 'SAVE_NOTE';
export const SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS';
export const SAVE_NOTE_FAILURE = 'SAVE_NOTE_FAILURE';

export const VIEW_NOTE = 'VIEW_NOTE';
