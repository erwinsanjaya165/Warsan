import {StyleSheet} from 'react-native';
import {Warna_Disable, Warna_Putih, Warna_Utama} from '../utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
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
