import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IconMenu} from '../../assets/icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Merah, Warna_Putih, Warna_Utama} from '../../utils';

export default class RwyatTraksi extends Component {
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
          <View style={styles.container1}>
            <View style={styles.boxId}>
              <View>
                <Text style={styles.textID}>ID 0010001001</Text>
                <Text style={styles.textTanggal}>12/12/2012</Text>
              </View>
              <View style={styles.boxBlumByar2}>
                <Text style={styles.textBlumByar}>Belum Bayar</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.boxBottom}
              onPress={() =>
                this.props.navigation.navigate('DtailRwyatTraksi')
              }>
              <Text style={styles.textBottom}>Detail Transaksi</Text>
            </TouchableOpacity>
          </View>
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
