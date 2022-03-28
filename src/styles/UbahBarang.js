import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Warna_Putih, Warna_Utama, Warna_Disable} from '../utils';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Warna_Putih,
    alignItems: 'center',
  },
  boxHeader: {
    width: wp('100%'),
    height: hp('6%'),
    backgroundColor: Warna_Utama,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBack: {
    position: 'absolute',
    left: 20,
  },
  textJudul: {
    fontSize: hp('2.3'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  container: {
    alignItems: 'center',
    marginTop: '15%',
  },
  containerGambar: {
    width: wp('90%'),
    height: hp('20%'),
    backgroundColor: Warna_Disable,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  gambar: {
    width: wp('85%'),
    height: hp('17%'),
    borderRadius: 7,
  },
  boxTextGambar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGambar: {
    fontSize: hp('1.7%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    paddingLeft: 5,
  },
  textInput: {
    marginTop: '6%',
    width: wp('90%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: Warna_Disable,
    borderRadius: 5,
    paddingLeft: 20,
  },
  bottom: {
    width: wp('90%'),
    height: hp('5.5%'),
    backgroundColor: Warna_Utama,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    borderRadius: 7,
  },
  textBottom: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: Warna_Putih,
  },
  centeredView: {
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    padding: 20,
    width: wp('80%'),
    height: hp('20%'),
    backgroundColor: Warna_Putih,
    borderWidth: 2,
    borderColor: Warna_Disable,
  },
  boxmodaltext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: hp('2%'),
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
  },
  boxIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  icon: {
    alignItems: 'center',
  },
  textIcon: {
    fontSize: hp('1.7%'),
    fontFamily: 'Montserrat-Medium',
    color: 'black',
  },
});
