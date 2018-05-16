/* @flow */

export type Action = {
  +type: string,
  payload?: Object | string
};

export type PlainActionCreator = () => Action;
