import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Main from './screens/Main';
import Calculations from './screens/Calculations';

export default class App extends Component {

  render() {
    return (
      <Main>
        <Calculations />
      </Main>
    );
  }
}
