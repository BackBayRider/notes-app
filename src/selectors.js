/* @flow */
import { Map } from 'immutable';
import { createSelector } from 'reselect';

const path = (
  (path: Array<string>) =>
  (state: Map<string, string>) =>
  state.getIn(path)
);

const currentView = path(['view', 'view']);

export const view = createSelector(
  currentView,
  view => {
    return view;
  }
)
