import {StyleSheet} from 'react-native';
import {Warna_Merah, Warna_Putih, Warna_Utama} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
    alignItems: 'center',
  },
  container1: {
    height: hp('6%'),
    width: wp('100%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAkun: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
  container2: {
    marginTop: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textJudul: {
    fontSize: hp('2.7%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  container3: {
    marginTop: '5%',
    width: wp('80%'),
    height: hp('12%'),
    backgroundColor: Warna_Putih,
    elevation: 7,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSaldo: {
    fontSize: hp('2.3%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  textJumlah: {
    marginTop: '2%',
    fontSize: hp('2.5%'),
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
  container4: {
    marginTop: '20%',
    width: wp('80%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: Warna_Utama,
  },
  textBottom: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  container5: {
    position: 'absolute',
    bottom: 20,
    width: wp('80%'),
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    backgroundColor: Warna_Merah,
  },
});
