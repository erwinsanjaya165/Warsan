import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Merah, Warna_Putih, Warna_Utama, Warna_Hijau} from '../utils';

export const styles = StyleSheet.create({
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
  boxContainer: {
    alignItems: 'center',
    paddingBottom: '10%',
  },
  container: {
    marginTop: '5%',
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
