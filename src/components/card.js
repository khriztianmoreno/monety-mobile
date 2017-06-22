import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class CreditCard extends Component {

	selectorImage(name){
		var imagz = {
			mastercard : require('../../img/Mastercard.png'),
			visa : require('../../img/Visa.png'),
			americanexpress : require('../../img/AmericanExpress.png'),
			dinersclub : require('../../img/DinersClub.png'),
		}[name];

		if(!imagz){
			imagz = require('../../img/TarjetaMonetyDefault.png'); 
		}

		return imagz;
	}

	render (){
		return (
			<View style={styles.card}>
				<Image resizeMode='contain' source={this.selectorImage(this.props.typeCard)} style={styles.image} />
				<View style={styles.content}>
					<Text style={styles.name}>{this.props.name}</Text>
					<View style={styles.inner}>{this.props.children}</View>
				</View>
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
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection : 'row'
  },
  image : {
  	width : 75,
  	height : 50,
  },
  content : {
  	paddingLeft : 10,
  	paddingRight : 10,
  },
  name : {
  	fontSize : 15,
  	fontWeight : 'bold'
  },
  inner : {
  	
  }
});