import {StyleSheet} from 'react-native';
import {Warna_Merah, Warna_Putih, Warna_Utama} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  container1: {
    height: hp('30%'),
    backgroundColor: Warna_Utama,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textJudul: {
    fontSize: hp('3.5%'),
    fontFamily: 'Montserrat-Medium',
    color: Warna_Putih,
  },
  boxKtlog: {
    marginTop: hp('2.5%'),
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textKtlog: {
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Medium',
    position: 'absolute',
    paddingLeft: 65,
    color: Warna_Utama,
  },
  containerBrang: {
    paddingHorizontal: 20,
  },
  boxBottom: {
    marginTop: '10%',
    width: wp('90%'),
    height: hp('4%'),
    position: 'absolute',
    bottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Warna_Utama,
  },
  textBottom: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
  container2: {
    marginTop: '5%',
    width: wp('90%'),
    height: hp('20%'),
    backgroundColor: Warna_Putih,
    elevation: 5,
    borderRadius: 5,
    padding: 10,
  },
  boxIndo: {
    flexDirection: 'row',
    padding: 10,
  },
  indomie: {
    width: wp('20%'),
    height: hp('10%'),
  },
  boxTextIndo: {
    paddingLeft: 20,
  },
  textIndo: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  textHarga: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  boxTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  box: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  boxTambah: {
    width: wp('25%'),
    height: hp('3.5%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  textTambah: {
    fontSize: hp('1.5%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
  textTotal: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  containerTmbah: {
    flexDirection: 'row',
    width: wp('20%'),
    justifyContent: 'space-between',
  },
  tamkur: {
    width: wp('7%'),
    height: hp('3%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
