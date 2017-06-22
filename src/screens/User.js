import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import db from '../models';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: undefined,
        email: undefined,
        token: undefined,
      }
    };
  }

  _onSubmit() {
    console.log(this.state.data);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text>User screen</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({data: { email: text}})} />
        <TouchableHighlight onPress={() => this._onSubmit()}>
          <Text>{'Submit'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    alignSelf: 'stretch',
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
