import {StyleSheet} from 'react-native';
import {
  Warna_Putih,
  Warna_Utama,
  Warna_Disable,
  Warna_Sekunder,
  Warna_Merah,
  Warna_Hijau,
} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
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
    position: 'absolute',
    right: '30%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  boxText: {
    marginTop: '3%',
    paddingHorizontal: 20,
  },
  boxTextSubtotal: {
    marginTop: '2.3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSub: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-Medium',
    color: Warna_Sekunder,
  },
  textSudahByar: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Hijau,
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
  boxQrcode: {
    alignItems: 'center',
    marginTop: '15%',
  },
});
