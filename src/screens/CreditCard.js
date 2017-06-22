import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DB from '../models';

import { ListView } from 'realm/react-native';
import {
  Button
} from 'react-native-elements'

export default class CreditCardScreen extends Component {
  constructor(props) {
    super(props);
    this.cards = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      nameCard : '',
      taxCard : 0,
      maxMountCard : 0,
      openNew : false,
      listCards : this.cards.cloneWithRows(DB.list('Card'))
    };
  }

  componentDidMount(){
    console.log('Lista: ', DB.list('Card'));
  }

  addCard() {
    let card = {
      name : this.state.nameCard,
      tax : this.state.taxCard,
      maxMount : this.state.maxMountCard
    };

    DB.add('Card', card);

    this.setState({
      openNew : false,
      listCards : this.cards.cloneWithRows(DB.list('Card')),
      nameCard : '',
      taxCard : 0,
      maxMountCard : 0,
    });
  }

  renderCard(data) {

    return
  }

  renderNewCard() {

    return
  }

  renderList() {
    return ( <View>
      <ListView
        dataSource={this.state.listCards}
        renderRow={data => this.renderCard(data)} />
      <Button
        icon={{name: 'cached'}}
        title='BUTTON WITH ICON'
        onPress={()=> this.setState({ openNew : true }) }/>
      </View>);
  }

  render() {
    return this.state.openNew ? this.renderNewCard() : this.renderList();
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
