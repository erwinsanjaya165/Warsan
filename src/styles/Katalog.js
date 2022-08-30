import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Merah, Warna_Putih, Warna_Utama} from '../utils';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
    alignItems: 'center',
  },
  boxheader: {
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  Icon: {
    position: 'absolute',
    right: 20,
  },
  textJudul: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  boxKtlog: {
    marginTop: '7%',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  textKtlog: {
    paddingLeft: 20,
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Utama,
  },
  boxContainer: {
    paddingBottom: '20%',
    marginTop: '5%',
  },
  container: {
    paddingHorizontal: 20,
  },
  boxProduct: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('16%'),
    backgroundColor: Warna_Putih,
    padding: 13,
    borderRadius: 5,
    elevation: 7,
    marginTop: '5%',
  },
  gambar: {
    width: wp('20%'),
    height: hp('10%'),
  },
  boxTextProduct: {
    paddingLeft: 20,
  },
  textNamaBrang: {
    padding: 5,
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  textHargaBrang: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  box: {
    width: wp('37%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    right: 13,
    bottom: 13,
  },
  boxUbah: {
    width: wp('17%'),
    height: hp('3%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textUbah: {
    fontSize: hp('1.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  boxHapus: {
    width: wp('17%'),
    height: hp('3%'),
    backgroundColor: Warna_Merah,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  bottom: {
    width: wp('80%'),
    height: hp('5%'),
    backgroundColor: Warna_Utama,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textBottom: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
});
