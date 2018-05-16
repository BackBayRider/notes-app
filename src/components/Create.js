/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import type { PlainActionCreator } from '../types.js';

type Props = {};

type State = {
  text: string;
}

export default class Create extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Add a New Note
        </Text>
        <TextInput
          style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1 }}
          multiline={true}
          value={this.state.text}
          onChangeText={text => this.setState({ text })} />
        <Button
          title='Save'
          onPress={() => null} />
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
