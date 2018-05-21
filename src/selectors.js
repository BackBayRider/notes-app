/* @flow */
import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { select } from './utils.js';

export const route = select('route');
export const view = select('view');
export const notes = select('notes');

const draft = select('draft');

export const draftTitle = createSelector(
  draft,
  draft => draft.title
);

export const draftContent = createSelector(
  draft,
  draft => draft.content
);
