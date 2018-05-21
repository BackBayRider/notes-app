/* @flow */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/Main.js';
import ViewContainer from './src/components/View.js';
import Create from './src/components/Create.js';
import { connect } from 'react-redux';

import type {
  PlainActionCreator,
  ActionCreator,
} from './src/types.js';
import * as Actions from './src/actions.js';
import { ROUTES } from './src/constants.js';
import {
  route,
  view,
  notes,
} from './src/selectors.js';

type Props = {
  route: $TODO,
  notes: $TODO,
  view: ?string,
  init: PlainActionCreator,
  createNote: PlainActionCreator,
  returnHome: PlainActionCreator,
  saveNote: ActionCreator,
  viewNote: ActionCreator,
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { route } = this.props;
    let Child;

    const DefaultChild = <Main
      notes={this.props.notes}
      viewNote={this.props.viewNote}
      createNote={this.props.createNote}
    />;

    switch (route) {
      case ROUTES.HOME:
        Child = DefaultChild;
        break;
      case ROUTES.VIEW:
        Child = <ViewContainer
          note={this.props.notes.get(this.props.view)}
          returnHome={this.props.returnHome} />
        break;
      case ROUTES.CREATE:
        Child = <Create
          saveNote={this.props.saveNote}
          returnHome={this.props.returnHome} />
        break;
      default:
        Child = DefaultChild;
    }

    return (
      <View>
        {Child}
      </View>
    );
  }
}

const mapState = state => ({
  route: route(state),
  view: view(state),
  notes: notes(state),
});

const mapDispatch = {
  init: Actions.init,
  createNote: Actions.createNote,
  returnHome: Actions.viewHome,
  saveNote: Actions.saveNote,
  viewNote: Actions.viewNote,
};

export default connect(mapState, mapDispatch)(App);
