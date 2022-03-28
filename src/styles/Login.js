import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Putih, Warna_Utama} from '../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Warna_Putih,
  },
  header: {
    marginTop: '30%',
    backgroundColor: Warna_Putih,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: Warna_Putih,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  Name: {
    fontSize: hp('3.5%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Utama,
  },
  ViewContent1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Warna_Utama,
    top: 70,
    borderBottomRightRadius: 200,
    left: 20,
    alignItems: 'center',
  },
  ViewContent2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Warna_Utama,
    top: 80,
    borderBottomRightRadius: 200,
    left: 20,
    alignItems: 'center',
  },
  inputText: {
    width: wp('65%'),
    color: Warna_Utama,
    paddingHorizontal: 10,
    paddingVertical: 10,
    right: 10,
    top: 5,
    left: 3,
    fontSize: 14,
  },
  ButtonDown: {
    alignItems: 'center',
    marginTop: '80%',
  },
  ViewButton1: {
    backgroundColor: Warna_Utama,
    width: wp('80%'),
    height: hp('6.5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  ViewButton2: {
    backgroundColor: Warna_Utama,
    width: wp('80%'),
    height: hp('6.5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: '5%',
  },
  Button: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
});
