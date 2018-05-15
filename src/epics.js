/* @flow */
import { combineEpics, ofType } from 'redux-observable';
import { map, tap } from 'rxjs/operators';

import {
  INIT,
  INIT_SUCCESS,
} from './action-types.js';

const initalizeEpic = action$ => {
  return action$.pipe(
    ofType(INIT),
    tap(() => console.log('performing epic initialization...')),
    map(() => ({ type: INIT_SUCCESS })),
  )
};

export default combineEpics(
  initalizeEpic
);
