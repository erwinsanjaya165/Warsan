import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {IconMenu} from '../../assets/icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Merah, Warna_Putih, Warna_Utama, Warna_Hijau} from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class RwyatTraksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      data: [],
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
  }
  dataTransaksi() {
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
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <View style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.detail}>Riwayat Transaksi</Text>
        </View>
        <View style={styles.boxDaftar}>
          <IconMenu />
          <Text style={styles.textDaftar}>Daftar Riwayat Transaksi</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* Daftar Riwayat */}
          <ScrollView>
            {this.state.data.map((value, index) => {
              return (
                <View style={styles.container1} key={index}>
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
                    onPress={() =>
                      this.props.navigation.navigate('DtailRwyatTraksi')
                    }>
                    <Text style={styles.textBottom}>Detail Transaksi</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  header: {
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
  boxDaftar: {
    flexDirection: 'row',
    marginTop: '8%',
    paddingHorizontal: 20,
  },
  textDaftar: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Utama,
    paddingLeft: 20,
  },
  container1: {
    marginTop: '8%',
    width: wp('90%'),
    height: hp('17%'),
    backgroundColor: Warna_Putih,
    elevation: 7,
    borderRadius: 7,
    alignItems: 'center',
  },
  boxId: {
    marginTop: '4%',
    width: wp('90%'),
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  textID: {
    fontSize: hp('1.7%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  textTanggal: {
    fontSize: hp('1.7%'),
    fontFamily: 'Montserrat-Regular',
    color: 'black',
  },
  boxBlumByar2: {
    width: wp('27%'),
    height: hp('4%'),
    backgroundColor: Warna_Merah,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  boxUdahByar: {
    width: wp('27%'),
    height: hp('4%'),
    backgroundColor: Warna_Hijau,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBlumByar: {
    fontSize: hp('1.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  boxBottom: {
    width: wp('80%'),
    height: hp('4.5%'),
    marginTop: '10%',
    borderRadius: 6,
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBottom: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
});
