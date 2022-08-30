import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {IconMenu} from '../../assets/icons';
import QRCode from 'react-native-qrcode-generator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../../styles/DetailTranksi';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.route.params.result[0].id,
      token: '',
      subtotal: '',
      status: '',
      data_barang: [],
      data_transaksi: '',
    };
  }
  componentDidMount() {
    console.log(this.props.route.params.result[0].id);
    AsyncStorage.getItem('token')
      .then(value => {
        console.log(value);
        if (value != null) {
          this.setState({token: value});
          fetch(
            `https://aplikasi-santri.herokuapp.com/api/show_transaksi/${this.state.id}`,
            {
              method: 'GET',
              redirect: 'follow',
              headers: {
                Authorization: `Bearer ${value}`,
              },
            },
          )
            .then(response => response.json())
            .then(result => {
              console.log('Data Barang', result.data_barang);
              console.log('Data Transaksi', result.data_transaksi);
              this.setState({
                data_transaksi: result.data_transaksi,
                subtotal: result.data_transaksi.subtotal,
                status: result.data_transaksi.status,
                data_barang: result.data_barang,
              });
            })
            .catch(error => console.log('error', error));
        } else {
          this.props.navigation.goBack();
        }
      })
      .catch(err => console.log('error', err));
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" color="white" size={25} />
            </TouchableOpacity>
            <Text style={styles.textJudul}>Checkout</Text>
          </View>
          <View style={styles.boxMenu}>
            <IconMenu />
            <Text style={styles.textDaftar}>Daftar Pesanan</Text>
          </View>
          <View style={styles.boxcontainerBrang}>
            {this.state.data_barang.map((value, index) => {
              return (
                <View style={styles.boxTextBrang} key={index}>
                  <Text style={styles.textNamaBrang}>{value.nama_barang}</Text>
                  <Text style={styles.textJumlahBrang}>
                    {value.jumlah_barang}x
                  </Text>
                  <Text style={styles.textNamaBrang}>{value.harga_barang}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.boxText}>
            <View style={styles.boxTextSubtotal}>
              <Text style={styles.textSub}>Subtotal</Text>
              <Text style={styles.textNamaBrang}>{this.state.subtotal}</Text>
            </View>
            <View style={styles.boxTextSubtotal}>
              <Text style={styles.textSub}>Status Pembayaran</Text>
              <Text style={styles.textStatus}>{this.state.status}</Text>
            </View>
            <View style={styles.boxTextSubtotal}>
              <Text style={styles.textSub}>ID Transaksi</Text>
              <Text style={styles.textId}>0{this.state.id}</Text>
            </View>
          </View>
          <View style={styles.boxQrcode}>
            <QRCode
              value={JSON.stringify(this.state.data_transaksi)}
              size={220}
              bgColor="black"
              fgColor="white"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
