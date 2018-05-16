/* @flow */
import {
  INIT,
  CREATE_NOTE,
} from './action-types.js';

const t = (type: string): Object => () => ({ type });

export const init = t(INIT);
export const createNote = t(CREATE_NOTE);
