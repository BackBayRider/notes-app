/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';
import type { PlainActionCreator } from '../types.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  createNote: PlainActionCreator,
};
export default class Main extends Component<Props> {
  createNote = () => {
    this.props.createNote();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Fun Notes
        </Text>
        <Button
          onPress={this.createNote}
          title='Create a Note'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />
        {new Array(10).fill('').map((_, i) => {
          return (
            <Text key={i}>
              Note {i}...
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
