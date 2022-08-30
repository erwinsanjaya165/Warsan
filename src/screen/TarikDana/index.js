import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../../styles/TarikDana';

export default class Tarikdana extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      nama_Bank: '',
      nomor_Rekening: '',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(value => {
        console.log(value);
        if (value != null) {
          this.setState({token: value});
        } else {
          this.props.navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  tarikdana() {
    if (this.state.nama_Bank === '') {
      Alert.alert('Nama Bank !', 'Anda belum mengisi nama bank');
    } else if (this.state.nomor_Rekening === '') {
      Alert.alert('Nomor Rekening !', 'Anda belum mengisi nomor rekening');
    } else {
      this.setState({loading: true});
      Alert.alert(
        'Pengajuan Success',
        'Dana telah di tarik dari dompet santri',
        [],
        {cancelable: true},
      );
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${this.state.token}`);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch('https://aplikasi-santri.herokuapp.com/api/tarik', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.props.navigation.goBack();
        })
        .catch(error => console.log('error', error));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{position: 'absolute', left: 25}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" size={27} color="white" />
          </TouchableOpacity>
          <Text style={styles.detail}>Tarik Dana</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.viewNamaBank}>
            <TextInput
              placeholder="Nama Bank"
              onChangeText={nama_Bank => this.setState({nama_Bank})}
            />
          </View>
          <View style={styles.viewNomorRekening}>
            <TextInput
              placeholder="Nomor Rekening"
              keyboardType="number-pad"
              onChangeText={nomor_Rekening => this.setState({nomor_Rekening})}
            />
          </View>
          <TouchableOpacity
            style={styles.viewBuatPengajuan}
            onPress={() => this.tarikdana()}>
            {this.state.loading ? (
              <ActivityIndicator size={25} color="white" />
            ) : (
              <Text style={styles.textBuatPengajuan}>Buat Pengajuan</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
