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

type Props = {
  returnHome: PlainActionCreator,
  notes: $TODO,
};
export default class ViewContainer extends Component<Props> {
  handleEdit = () => {
    const { note } = this.props;
    this.props.editNote({
      id: note.id,
      title: note.title,
      content: note.content,
    });
  }
  render() {
    const { note } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.note}>
          <Text style={styles.title}>
            {note.title}
          </Text>
          <Text style={styles.content}>
            {note.content}
          </Text>
        </View>
        <View style={styles.controls}>
          <Button
            title='Edit'
            color='orange'
            onPress={this.handleEdit} />
          <Button
            title='Back'
            onPress={this.props.returnHome} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  note: {
    height: '90%',
    width: '90%',
    paddingLeft: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 35,
    marginBottom: 35,
  },
  content: {
    fontSize: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
