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
  viewNote: ActionCreator,
  notes: $TODO,
};
export default class Main extends Component<Props> {
  state = {
    offset: 0,
    direction: 1,
  }
  timer = null;
  componentDidMount() {
    const limit = 55;
    this.timer = setInterval(() => {
      let { offset, direction } = this.state;
      if (Math.abs(offset) === limit) {
        direction *= -1;
      }
      offset += direction;
      this.setState({
        offset,
        direction,
      });
    }, 15);

  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  createNote = () => {
    this.props.createNote();
  }
  render() {
    const { notes } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Happy Note
        </Text>
        <View style={styles.notes}>
          {notes.size ?
            this.props.notes.toList().map(note => {
              return (
                <View key={note.id} style={styles.noteItem}>
                  <Button
                    onPress={() => this.props.viewNote({ id: note.id })}
                    title={note.title}
                  />
                  <Text style={{ marginBottom: -3, marginLeft: 5 }}>
                    {note.content.substring(0, 50)}...
                  </Text>
                </View>
              );
            })
            : (
              <View style={{ alignItems: 'center' }}>
                <Text style={[ styles.empty, { marginLeft: this.state.offset } ]}>^_^</Text>
              </View>
            )
          }
        </View>
        <Button
          onPress={this.createNote}
          title='Create a Note'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  notes: {
    height: '70%',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    borderTopWidth: 1,
    borderTopColor: 'rgb(25,25,25)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(50,50,50)',
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  empty: {
    fontSize: 75,
  }
});
