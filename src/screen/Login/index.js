import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {Iconemail, Iconlock, Iconmata} from '../../assets/icons';
import {styles} from '../../styles/Login';
import {Warna_Utama} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      roles: '',
      mata: true,
    };
  }

  login = () => {
    if (this.state.email === '') {
      Alert.alert('Email !', 'Anda belum mengisi email');
    } else if (
      this.state.email.split('@')[1] !== 'gmail.com' &&
      this.state.email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Email !', 'Email yang anda masukkan salah');
    } else if (this.state.password === '') {
      Alert.alert('Password !', 'Anda belum mengisi password');
    } else if (this.state.password.length < 8) {
      Alert.alert('Password !', 'Passsword minimal 8 karakter');
    } else {
      this.setState({loading: true});
      let formdata = new FormData();
      formdata.append('email', this.state.email);
      formdata.append('password', this.state.password);

      fetch('https://aplikasi-santri.herokuapp.com/api/login', {
        method: 'POST',
        redirect: 'follow',
        body: formdata,
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          AsyncStorage.setItem('token', result.data.token);
          if (result.data.roles === 'customer') {
            this.props.navigation.replace('Homescreen');
          } else {
            this.props.navigation.replace('Katalog');
          }
        })
        .catch(error => console.log('error', error))
        .finally(() => this.setState({loading: false}));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.Name}>Warung Santri</Text>
          <Text style={styles.Name}>Login</Text>
        </View>
        <View style={styles.footer}>
          {/* Email */}
          <View style={styles.ViewContent1}>
            <Iconemail />
            <TextInput
              placeholder="Email"
              placeholderTextColor={Warna_Utama}
              keyboardType="default"
              style={styles.inputText}
              onChangeText={email => this.setState({email})}
            />
          </View>
          {/* Kata Sandi */}
          <View style={styles.ViewContent2}>
            <Iconlock />
            <TextInput
              placeholder="Kata Sandi"
              keyboardType="ascii-capable"
              placeholderTextColor={Warna_Utama}
              secureTextEntry={this.state.mata}
              style={styles.inputText}
              onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity
              onPressOut={() => this.setState({mata: !this.state.mata})}>
              <Iconmata />
            </TouchableOpacity>
          </View>

          {/* Masuk */}
          <View style={styles.ButtonDown}>
            <TouchableOpacity
              style={styles.ViewButton1}
              onPress={() => this.login()}>
              {this.state.loading ? (
                <ActivityIndicator size={25} color="white" />
              ) : (
                <Text style={styles.Button}>MASUK</Text>
              )}
            </TouchableOpacity>
            {/* Daftar */}
            <TouchableOpacity
              style={styles.ViewButton2}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.Button}>DAFTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
