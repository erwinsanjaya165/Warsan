import {StyleSheet} from 'react-native';
import {Warna_Utama} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    marginTop: '3%',
    fontSize: hp('3%'),
    fontFamily: 'Montserrat-Bold',
    color: Warna_Utama,
  },
  boxLoading: {
    width: '30%',
    height: '30%',
    position: 'absolute',
    bottom: 10,
  },
});
