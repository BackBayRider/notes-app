/* @flow */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/Main.js';
import Create from './src/components/Create.js';
import { connect } from 'react-redux';

import type { PlainActionCreator } from './src/types.js';
import { init, createNote } from './src/actions.js';
import { view } from './src/selectors.js';

type Props = {
  view: string,
  init: PlainActionCreator,
  createNote: PlainActionCreator,
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { view } = this.props;
    let Child;

    switch (view) {
      case 'main':
      Child = <Main createNote={this.props.createNote} />
      break;
      case 'create':
      Child = <Create />
      break;
      default:
      Child = <Main createNote={this.props.createNote} />
    }

    return (
      <View>
        {Child}
      </View>
    );
  }
}

const mapState = state => ({
  view: view(state),
});

const mapDispatch = {
  init,
  createNote,
};

export default connect(mapState, mapDispatch)(App);
