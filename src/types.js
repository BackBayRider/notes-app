/* @flow */
import { Record } from 'immutable';
import type { RecordFactory, RecordOf } from 'immutable';

export type PlainActionCreator = () => {
  type: string
};

export type ActionCreator = (payload: Object) => {
  type: string,
  payload: Object
};

export type Note = {
  id: string,
  title: string,
  content: string,
};

export const noteFactory: RecordFactory<Note> = Record({
  id: null,
  title: '',
  content: '',
});
