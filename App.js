/* @flow */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/main.js';
import { connect } from 'react-redux';

import type { Action } from './src/types.js';
import { init } from './src/actions.js';
import { view } from './src/selectors.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  view: string,
  init: () => Action,
};
class App extends Component<Props> {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapState = state => ({
  view: view(state),
});

const mapDispatch = {
  init,
};

export default connect(mapState, mapDispatch)(App);
