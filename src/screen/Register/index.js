import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {Iconemail, Iconlock, Iconmata, Iconuser} from '../../assets/icons';
import {Warna_Utama} from '../../utils';
import {styles} from '../../styles/Register';
import {
  email,
  finish,
  nama,
  password,
  password_confirmation,
} from '../../components/Notifikasi';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      roles: 'customer',
      loading: false,
      mata1: true,
      mata2: true,
    };
  }

  register = () => {
    if (this.state.name === '') {
      nama();
    } else if (
      this.state.email.split('@')[1] !== 'gmail.com' &&
      this.state.email.split('@')[1] !== 'email.com'
    ) {
      email();
    } else if (this.state.password.length < 8) {
      password();
    } else if (this.state.password !== this.state.password_confirmation) {
      password_confirmation();
    } else {
      this.setState({loading: true});
      fetch('https://aplikasi-santri.herokuapp.com/api/registeruser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          roles: this.state.roles,
        }),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          finish();
          this.props.navigation.goBack();
        })
        .catch(err => {
          console.log('error', err);
        })
        .finally(() => this.setState({loading: false}));
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.Name}>Warung Santri</Text>
            <Text style={styles.Name}>Register</Text>
          </View>
          <View style={styles.footer}>
            {/* user */}
            <View style={styles.ViewContent1}>
              <Iconuser />
              <TextInput
                placeholder="Nama Lengkap"
                placeholderTextColor={Warna_Utama}
                style={styles.inputText}
                onChangeText={name => this.setState({name})}
              />
            </View>
            {/* Email */}
            <View style={styles.ViewContent2}>
              <Iconemail />
              <TextInput
                placeholder="Email"
                placeholderTextColor={Warna_Utama}
                style={styles.inputText}
                onChangeText={email => this.setState({email})}
              />
            </View>
            {/* Kata Sandi */}
            <View style={styles.ViewContent3}>
              <Iconlock />
              <TextInput
                placeholder="Kata Sandi"
                placeholderTextColor={Warna_Utama}
                secureTextEntry={this.state.mata1}
                style={styles.inputText}
                onChangeText={password => this.setState({password})}
              />
              <TouchableOpacity
                onPressOut={() => this.setState({mata1: !this.state.mata1})}>
                <Iconmata />
              </TouchableOpacity>
            </View>
            {/* Konfirmasi Kata Sandi */}
            <View style={styles.ViewContent4}>
              <Iconlock />
              <TextInput
                placeholder=" Konfirmasi Kata Sandi"
                placeholderTextColor={Warna_Utama}
                secureTextEntry={this.state.mata2}
                style={styles.inputText}
                onChangeText={password_confirmation =>
                  this.setState({password_confirmation})
                }
              />
              <TouchableOpacity
                onPressOut={() => this.setState({mata2: !this.state.mata2})}>
                <Iconmata />
              </TouchableOpacity>
            </View>

            {/* Masuk */}
            <View style={styles.ButtonDown}>
              <TouchableOpacity
                style={styles.ViewButton1}
                onPress={() => this.register()}>
                {this.state.loading ? (
                  <ActivityIndicator size={25} color="white" />
                ) : (
                  <Text style={styles.Button}>DAFTAR</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ViewButton2}
                onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.Button}>MASUK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
