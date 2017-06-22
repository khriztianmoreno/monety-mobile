import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  ListView,
  ScrollView,
  Dimensions,
} from 'react-native';

import _ from 'lodash';

export default class CalculationsScreen extends Component {
  constructor(props){
    super(props);
    /*this.cards = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});*/
    this.state = {
      priceStr : '',
      priceNum : 0,
      installment : 0,
      tax : 2.3,
      /*cards : this.cards.cloneWithRows( db.list('Card') )*/
    };
  }

  converToNumber (num){
    var x = parseInt( ( num + '' ).replace(/\./gim, '') );
    return _.isNaN(x) || x == 'NaN' ? 0 : x;
  }

  convertToString(num){
    var nums = ( this.converToNumber(num) + '' ).split('').reverse();
    var str = [];

    for (var i = nums.length - 1; i >= 0; i--) {
      str.push(nums[i])
      if(i % 3 === 0 && i > 1) {
        str.push('.');
      }
    }

    return str.join('');
  }

  putNumber (num){
    var priceNum = this.converToNumber(num);
    var priceStr = this.convertToString(num);
    this.setState({priceNum,  priceStr });
  }


  /*renderRow(data){
    var total = ( this.state.priceNum * ( ( data.tasa * 100 ) + 1 ) ) ^ this.state.installment;
    return (
      <CreditCard typeCard={data.type} name={data.name}>
        <TextInput
          keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
          onChangeText={(text) => this.putNumber(text)}
          value={data.tax}
        />
        <Text>{' $' +  (total / this.state.installment ) }</Text>
        <Text>{'Total $' +  total }</Text>
      </CreditCard>
    );
  }
<ListView
          dataSource={this.state.cards}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
  */

  nextInput(input) {
    this.refs[input].focus();
  }

  render(){
    const { height, width } = Dimensions.get('window');
    var total = parseInt(this.state.priceNum * Math.pow( 1 + (this.state.tax / 100), this.state.installment));
    /*var total =  Math.pow(this.state.priceNum * (1 + this.state.tax / 1000 ), this.state.installment) */

    return (
      <View
        style={{ height: height * 0.8, paddingHorizontal: 30, paddingVertical: 10 }}
      >
        <View>
          <Text style={styles.label}>Valor</Text>
          <TextInput
            ref="price"
            style={[styles.numbers]}
            placeholder="0"
            keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
            onChangeText={(text) => this.putNumber(text)}
            value={this.state.priceStr}
            underlineColorAndroid="rgb(245, 245, 245)"
            onSubmitEditing={() => this.nextInput('installment')}
          />
        </View>
        <View>
          <Text style={styles.label}>Cuota</Text>
          <TextInput
            ref="installment"
            style={[styles.numbers]}
            keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
            placeholder="0"
            onChangeText={(installment) => this.setState({installment})}
            value={this.state.installment}
            underlineColorAndroid="rgb(245, 245, 245)"
            onSubmitEditing={() => this.nextInput('tax')}
          />
        </View>
        <View>
          <Text style={styles.label}>Intereses</Text>
          <TextInput
            ref="tax"
            style={[styles.numbers]}
            keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
            placeholder="2.3"
            onChangeText={(tax) => this.setState({tax})}
            value={this.state.tax}
            underlineColorAndroid="rgb(245, 245, 245)"
          />
        </View>

        <View>
          <Text style={styles.label}>Valor cuota</Text>
          <Text style={styles.numbers}>{'$' + this.convertToString( parseInt(total / this.state.installment )) }</Text>
          <Text style={styles.label}>Total a pagar</Text>
          <Text style={styles.numbers}>{'$' + this.convertToString(total) }</Text>
          <Text style={[styles.label, { color: '#DF0101' }]}>Total pago de intereses</Text>
          <Text style={[styles.numbers, { color: '#DF0101' }]}>{'$' + this.convertToString(total - parseInt(this.state.priceNum)) }</Text>
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
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  numbers : {
    fontSize : 40,
    paddingHorizontal : 10,
    paddingTop : 1,
    paddingBottom : 5,
    textAlign : 'right',
    borderColor: 'transparent',
    borderWidth: 1,
    height: 50,
  },
  label : {
    fontSize : 20,
    paddingHorizontal: 10,
  },
  result : {
    textAlign : 'right',
  }
});
