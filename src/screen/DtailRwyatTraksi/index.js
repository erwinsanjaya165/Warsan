import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconMenu} from '../../assets/icons';
import {
  Warna_Merah,
  Warna_Putih,
  Warna_Sekunder,
  Warna_Utama,
} from '../../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class DtailRwyatTraksi extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBack}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" size={27} color="white" />
          </TouchableOpacity>
          <Text style={styles.detail}>Detail Transaksi</Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.ViewDaftar}>
            <IconMenu />
            <Text style={styles.daftarPesan}>Daftar Pesanan</Text>
          </View>
          {/* Content 1 */}
          <View style={styles.Indomie1}>
            <Text style={styles.TextContent1}>Indomie Goreng</Text>
            <Text style={styles.TextContent2}>3 x </Text>
            <Text style={styles.TextContent3}>Rp. 9.000</Text>
          </View>
          {/* Content 2 */}
          <View style={styles.Indomie1}>
            <Text style={styles.TextContent1}>Indomie Goreng</Text>
            <Text style={styles.TextContent2}>3 x </Text>
            <Text style={styles.TextContent3}>Rp. 9.000</Text>
          </View>
          {/* Content 3 */}
          <View style={styles.Indomie1}>
            <Text style={styles.TextContent1}>Indomie Goreng</Text>
            <Text style={styles.TextContent2}>3 x </Text>
            <Text style={styles.TextContent3}>Rp. 9.000</Text>
          </View>
          {/* Line */}
          <View style={styles.line} />
          {/* Subtotal */}
          <View style={styles.viewPembayaran}>
            <Text style={styles.leftContent}>Subtotal</Text>
            <Text style={styles.rightContent}>Rp 27.000</Text>
          </View>
          {/* Status Pembayaran */}
          <View style={styles.viewPembayaran}>
            <Text style={styles.leftContent}>Status Pembayaran</Text>
            <Text style={styles.textBayar}>Sudah Bayar</Text>
          </View>
          {/* ID Transaksi */}
          <View style={styles.viewPembayaran}>
            <Text style={styles.leftContent}>ID Transaksi</Text>
            <Text style={styles.rightContent}>0010001001</Text>
          </View>
          {/* QR Code */}
          <View style={styles.viewQRCode}>
            <Image
              source={require('../../assets/image/qr-code.png')}
              style={styles.qrcode}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Utama,
  },
  header: {
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconBack: {
    position: 'absolute',
    left: 20,
  },
  footer: {
    flex: 2,
    backgroundColor: Warna_Putih,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  detail: {
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  ViewDaftar: {
    flexDirection: 'row',
  },
  list: {
    width: 24,
    height: 24,
    tintColor: Warna_Utama,
  },
  daftarPesan: {
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Utama,
    paddingLeft: 20,
  },
  Indomie1: {
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextContent1: {
    fontSize: hp('2.2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Sekunder,
  },
  TextContent2: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Sekunder,
    paddingLeft: 60,
  },
  TextContent3: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  line: {
    borderBottomWidth: 1,
    marginVertical: 25,
  },
  viewPembayaran: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
    marginVertical: 5,
  },
  leftContent: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Medium',
    color: Warna_Sekunder,
  },
  rightContent: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  textBayar: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Merah,
  },
  viewQRCode: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  qrcode: {
    width: 250,
    height: 253.88,
  },
});
