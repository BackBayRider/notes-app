/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import type {
  PlainActionCreator,
  ActionCreator,
} from '../types.js';
import { draftNote } from '../actions.js';
import {
  view,
  draftTitle,
  draftContent,
} from '../selectors.js';

type Props = {
  saveNote: ActionCreator,
  returnHome: PlainActionCreator,
};

type State = {
  title: string;
  content: string;
  error: string;
}

const textarea = {
  marginTop: 25,
  height: 40,
  width: '85%',
  padding: 5,
  borderColor: 'gray',
  borderWidth: 1,
};

class Create extends Component<Props, State> {
  constructor(props: Object) {
    super(props);
    this.state = { error: null };
  }
  handleSave = () => {
    const { title, content, editId, } = this.props;
    let error;

    if (!title.trim()) {
      error = 'Title cannot be empty.';
    } else if (!content.trim()) {
      error = 'Content cannot be empty.';
    }

    if (error) {
      this.setState({ error });
    } else {
      this.props.saveNote({ id: editId, title, content });
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Write a Happy Note
        </Text>
        <TextInput
          style={ textarea }
          multiline={false}
          placeholder='Title'
          value={this.props.title}
          onChangeText={title => this.props.draftNote({ field: 'title', text: title })} />
        <TextInput
          style={{ ...textarea, height: 160, marginBottom: 25 }}
          multiline={true}
          placeholder='Content'
          value={this.props.content}
          onChangeText={content => this.props.draftNote({ field: 'content', text: content })} />
        <Button
          title='Save'
          onPress={this.handleSave} />
        <Button
          title='Cancel'
          color='red'
          onPress={this.props.returnHome} />
        {this.state.error &&
          <Text style={{ color: 'red', fontWeight: 'bold', marginTop: 15 }}>
            {this.state.error}
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
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

const mapState = state => ({
  editId: view(state),
  title: draftTitle(state),
  content: draftContent(state),
});

const mapDispatch = {
  draftNote,
};

export default connect(mapState, mapDispatch)(Create);
