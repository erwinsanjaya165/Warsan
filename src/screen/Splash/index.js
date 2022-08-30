import {Text, View, StatusBar} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../../styles/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IconLogo} from '../../assets/icons';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then(value => {
      console.log(value);
      setTimeout(() => {
        if (value != null) {
          fetch('https://aplikasi-santri.herokuapp.com/api/user', {
            method: 'GET',
            redirect: 'follow',
            headers: {
              Authorization: `Bearer ${value}`,
            },
          })
            .then(response => response.json())
            .then(result => {
              console.log(result);
              if (result.roles === 'customer') {
                this.props.navigation.replace('Homescreen');
              } else {
                this.props.navigation.replace('Katalog');
              }
            })
            .catch(error => console.log('error', error));
        } else {
          this.props.navigation.replace('Login');
        }
      }, 3000);
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <StatusBar backgroundColor="white" />
        <IconLogo />
        <Text style={styles.text}>Warung Santri</Text>
        <View style={styles.boxLoading}>
          <LottieView
            source={require('../../assets/lottie/loadingSplash.json')}
            loop={true}
            autoPlay={true}
          />
        </View>
      </View>
    );
  }
}
