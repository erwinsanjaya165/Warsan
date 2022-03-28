import {Text, View, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';
import {Warna_Putih} from '../../utils';
import {styles} from '../../styles/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then(value => {
      console.log(value);
      setTimeout(() => {
        if (value != null) {
          this.props.navigation.replace('Homescreen');
        } else {
          this.props.navigation.replace('Login');
        }
      }, 3000);
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>Ws</Text>
        <ActivityIndicator size={35} color={Warna_Putih} />
      </View>
    );
  }
}
