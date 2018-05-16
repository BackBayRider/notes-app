/* @flow */
import { Map } from 'immutable';

export const select = (
  (path: Array<string> | string) =>
  (state: Map<string, string>) => {
    if (!Array.isArray(path)) {
      path = [path];
    }
    return state.getIn(path)
  }
);
