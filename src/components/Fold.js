import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class FoldComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      open: false,
    };
  }

  toggle() {
    this.setState((prevState, props) => {
      return { open: !prevState.open };
    });
  }

  render() {
    const { BaseComponent, ShowComponent, baseProps, showProps } = this.props;
    const { open } = this.state;

    return (
      <View style={styles.container} >
        {BaseComponent}
        {open && <View style={styles.separator} />}
        {open && ShowComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  separator: {
    marginVertical: 3,
    backgroundColor: '#BBB',
    height: 1,
  }
});