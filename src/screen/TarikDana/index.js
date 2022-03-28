import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {
  Warna_Disable,
  Warna_Putih,
  Warna_Sekunder,
  Warna_Utama,
} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Tarikdana extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{position: 'absolute', left: 25}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" size={27} color="white" />
          </TouchableOpacity>
          <Text style={styles.detail}>Tarik Dana</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          {/* Nama Bank */}
          <View style={styles.viewNamaBank}>
            <TextInput placeholder="Nama Bank" />
          </View>

          {/* Nomor Rekening */}
          <View style={styles.viewNomorRekening}>
            <TextInput placeholder="Nomor Rekening" keyboardType="number-pad" />
          </View>

          {/* Button Buat Pengajuan */}
          <TouchableOpacity style={styles.viewBuatPengajuan}>
            <Text style={styles.textBuatPengajuan}>Buat Pengajuan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  header: {
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footer: {
    flex: 2,
    backgroundColor: Warna_Putih,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center',
  },
  detail: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  viewNamaBank: {
    marginTop: '30%',
    width: wp('85%'),
    height: hp('6%'),
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: Warna_Disable,
  },
  viewNomorRekening: {
    marginTop: '5%',
    width: wp('85%'),
    height: hp('6%'),
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: Warna_Disable,
  },
  viewBuatPengajuan: {
    width: wp('85%'),
    height: hp('6%'),
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Utama,
    position: 'absolute',
    bottom: 20,
  },
  textBuatPengajuan: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
});
