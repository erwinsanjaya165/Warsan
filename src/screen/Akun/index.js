import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import {styles} from '../../styles/Akun';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Akun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      token: '',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value != null) {
          this.setState({token: value});
        } else {
          this.props.navigation.replace('Login');
        }
      })
      .then(() => this.Saldo())
      .catch(error => console.log('error', error));
  }
  // API SALDO (Profile)
  Saldo() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.state.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://aplikasi-santri.herokuapp.com/api/user', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({balance: result.balance});
      })

      .catch(error => console.log('error', error));
  }
  // API LOGOUT
  Logout() {
    this.setState({loading: true});
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.state.token}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://aplikasi-santri.herokuapp.com/api/logout', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        AsyncStorage.removeItem('token');
        this.props.navigation.replace('Login');
      })
      .catch(error => console.log('error', error));
  }

  warningLogout() {
    Alert.alert('Warning !', 'apakah anda yakin ingin keluar', [
      {
        text: 'batal',
      },
      {
        text: 'OK',
        onPress: () => this.Logout(),
      },
    ]);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container1}>
          <Text style={styles.textAkun}>Akun Saya</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.textJudul}>Warung Santri</Text>
          <Text style={styles.textJudul}>Pondok Programmer</Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.textSaldo}>Saldo</Text>
          <Text style={styles.textJumlah}>Rp {this.state.balance}</Text>
        </View>
        <TouchableOpacity
          style={styles.container4}
          onPress={() => this.props.navigation.navigate('TarikDana')}>
          <Text style={styles.textBottom}>Tarik Dana</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container5}
          onPress={() => this.warningLogout()}>
          {this.state.loading ? (
            <ActivityIndicator size={25} color="white" />
          ) : (
            <Text style={styles.textBottom}>Keluar Aplikasi</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
