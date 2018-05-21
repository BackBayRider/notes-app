/* @flow */
import { combineEpics, ofType } from 'redux-observable';
import { map, tap, pluck } from 'rxjs/operators';
import { noteFactory } from './types.js';
import uuid from 'uuid/v4';

import {
  INIT,
  INIT_SUCCESS,
  SAVE_NOTE,
  SAVE_NOTE_SUCCESS,
  SAVE_NOTE_FAILURE,
} from './constants.js';

const initalizeEpic = action$ => {
  return action$.pipe(
    ofType(INIT),
    tap(() => console.log('performing epic initialization...')),
    map(() => ({ type: INIT_SUCCESS })),
  )
};

const saveNoteEpic = action$ => {
  return action$.pipe(
    ofType(SAVE_NOTE),
    pluck('payload'),
    map(note => !note.id
      ? noteFactory(note).set('id', uuid())
      : noteFactory(note)
    ),
    map(note => ({
      type: SAVE_NOTE_SUCCESS,
      payload: note,
    }))
  )
};

export default combineEpics(
  initalizeEpic,
  saveNoteEpic,
);
