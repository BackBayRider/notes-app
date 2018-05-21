/* @flow */
import {
  INIT,
  CREATE_NOTE,
  RETURN_HOME,
  SAVE_NOTE,
  VIEW_NOTE,
} from './constants.js';

const t = (type: string): Object => () => ({ type });

const p = (type: string): Object => (payload: Object) => ({
  type,
  payload,
});

export const init = t(INIT);
export const createNote = t(CREATE_NOTE);
export const viewHome = t(RETURN_HOME);
export const saveNote = p(SAVE_NOTE);
export const viewNote = p(VIEW_NOTE);
