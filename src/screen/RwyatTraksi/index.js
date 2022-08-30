import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {IconMenu} from '../../assets/icons';
import LottieView from 'lottie-react-native';
import {styles} from '../../styles/RwyatTraksi';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RwyatTraksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value != null) {
          this.setState({token: value});
        } else {
          this.props.navigation.goBack();
        }
      })
      .then(() => this.dataTransaksi())
      .catch(err => {
        console.log('token error', err);
      });
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.dataTransaksi();
    });
  }
  dataTransaksi() {
    this.setState({loading: true});
    fetch('https://aplikasi-santri.herokuapp.com/api/data_transaksi', {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log('ini data', result);
        this.setState({data: result.data});
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));
  }

  render() {
    return this.state.loading ? (
      <LottieView
        source={require('../../assets/lottie/lf30_editor_jacslskt.json')}
        loop={true}
        autoPlay={true}
      />
    ) : (
      <View style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.detail}>Riwayat Transaksi</Text>
        </View>
        <ScrollView>
          <View style={styles.boxDaftar}>
            <IconMenu />
            <Text style={styles.textDaftar}>Daftar Riwayat Transaksi</Text>
          </View>
          <View style={styles.boxContainer}>
            {/* Daftar Riwayat */}
            {this.state.data.map((value, index) => {
              return (
                <View style={styles.container} key={index}>
                  <View style={styles.boxId}>
                    <View>
                      <Text style={styles.textID}>{value.id}</Text>
                      <Text style={styles.textTanggal}>
                        {value.created_at.substr(0, 10)}
                      </Text>
                    </View>
                    {value.status === 'sudah dibayar' ? (
                      <View style={styles.boxUdahByar}>
                        <Text style={styles.textBlumByar}>{value.status}</Text>
                      </View>
                    ) : (
                      <View style={styles.boxBlumByar2}>
                        <Text style={styles.textBlumByar}>{value.status}</Text>
                      </View>
                    )}
                  </View>
                  <TouchableOpacity
                    style={styles.boxBottom}
                    onPress={() => {
                      this.props.navigation.navigate('DtailRwyatTraksi', {
                        id: value.id,
                      });
                    }}>
                    <Text style={styles.textBottom}>Detail Transaksi</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
