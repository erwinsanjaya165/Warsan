import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Warna_Putih,
  Warna_Utama,
  Warna_Disable,
  Warna_Sekunder,
  Warna_Merah,
} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconMenu} from '../../assets/icons';

const Checkout = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="white" size={25} />
        </TouchableOpacity>
        <Text style={styles.textJudul}>Checkout</Text>
      </View>
      <View style={styles.boxMenu}>
        <IconMenu />
        <Text style={styles.textDaftar}>Daftar Pesanan</Text>
      </View>
      <View style={styles.boxcontainerBrang}>
        <View style={styles.boxTextBrang}>
          <Text style={styles.textNamaBrang}>indomie goreng</Text>
          <Text style={styles.textJumlahBrang}>1x</Text>
          <Text style={styles.textNamaBrang}>Rp 3.000</Text>
        </View>
      </View>
      <View style={styles.boxText}>
        <View style={styles.boxTextSubtotal}>
          <Text style={styles.textSub}>Subtotal</Text>
          <Text style={styles.textNamaBrang}>Rp 3.000</Text>
        </View>
        <View style={styles.boxTextSubtotal}>
          <Text style={styles.textSub}>Status Pembayaran</Text>
          <Text style={styles.textStatus}>Belum Bayar</Text>
        </View>
        <View style={styles.boxTextSubtotal}>
          <Text style={styles.textSub}>ID Transaksi</Text>
          <Text style={styles.textId}>0010001001</Text>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  header: {
    width: wp('100%'),
    height: hp('6%'),
    backgroundColor: Warna_Utama,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
  textJudul: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  boxMenu: {
    paddingLeft: 20,
    marginTop: '7%',
    flexDirection: 'row',
  },
  textDaftar: {
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Utama,
    paddingLeft: 20,
  },
  boxcontainerBrang: {
    marginTop: '3%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderColor: Warna_Disable,
  },
  boxTextBrang: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textNamaBrang: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  textJumlahBrang: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  boxText: {
    marginTop: '3%',
    paddingHorizontal: 20,
  },
  boxTextSubtotal: {
    marginTop: '2.3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSub: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Medium',
    color: Warna_Sekunder,
  },
  textStatus: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Merah,
  },
  textId: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
});
