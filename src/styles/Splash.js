import {StyleSheet} from 'react-native';
import {Warna_Utama, Warna_Putih} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Warna_Utama,
  },
  text: {
    fontSize: hp('5.5%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Putih,
  },
});
