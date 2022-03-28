import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  PermissionsAndroid,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../styles/UbahBarang';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNModal from 'react-native-modal';

const TambahBarang = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [resPhoto, setResPhoto] = useState(false);
  const [token, setToken] = useState('');
  const [nama_barang, setNama_barang] = useState('');
  const [harga_barang, setHarga_barang] = useState('');
  const [uri, setUri] = React.useState(null);
  const [image, setImage] = useState({
    name: '',
    uri: '',
    type: '',
  });

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    const options = {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      type: 'image/jpeg',
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User canceled camera');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        console.log('gambar camera', res);
        setModalVisible(false);
        setUri(res.assets[0].uri);
        setImage({
          name: res.assets[0].fileName,
          uri: res.assets[0].uri,
          type: res.assets[0].type,
        });
        setResPhoto(true);
      }
    });
  };

  const requestGaleriPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Galeri permission given');
        openGallery();
      } else {
        console.log('Galeri permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openGallery = () => {
    const options = {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      type: 'image/jpeg',
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User Canceled Gallery');
      } else if (res.errorCode) {
        console.log(res.errorCode);
      } else {
        console.log('gambar galeri', res);
        setModalVisible(false);
        setUri(res.assets[0].uri);
        setImage({
          name: res.assets[0].fileName,
          uri: res.assets[0].uri,
          type: res.assets[0].type,
        });
        setResPhoto(true);
      }
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(value => {
        console.log(value);
        if (value != null) {
          setToken(value);
        } else {
          navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const TmbahBrang = () => {
    {
      setLoading(true);
    }
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('gambar_barang', image, '[PROXY]');
    formdata.append('nama_barang', nama_barang);
    formdata.append('harga_barang', harga_barang);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://aplikasi-santri.herokuapp.com/api/store', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        navigation.navigate('Katalog');
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.page}>
      <View style={styles.boxHeader}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="white" size={25} />
        </TouchableOpacity>
        <Text style={styles.textJudul}>Tambah Barang</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerGambar}
          onPress={() => setModalVisible(true)}>
          {resPhoto ? (
            <Image source={{uri: uri}} style={styles.gambar} />
          ) : (
            <View style={styles.boxTextGambar}>
              <Icon name="camera-outline" size={20} color="black" />
              <Text style={styles.textGambar}>Unggah Gambar</Text>
            </View>
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Nama Barang"
          onChangeText={nama_barang => setNama_barang(nama_barang)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Harga Barang"
          onChangeText={harga_barang => setHarga_barang(harga_barang)}
        />
      </View>
      <TouchableOpacity style={styles.bottom} onPress={() => TmbahBrang()}>
        {loading ? (
          <ActivityIndicator size={25} color="white" />
        ) : (
          <Text style={styles.textBottom}>Simpan</Text>
        )}
      </TouchableOpacity>
      <RNModal
        isVisible={modalVisible}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.boxmodaltext}>
              <Text style={styles.modalText}>Unggah Gambar</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" color="black" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.boxIcon}>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => requestCameraPermission()}>
                <Icon name="camera" size={30} color="black" />
                <Text style={styles.textIcon}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => requestGaleriPermission()}>
                <Icon name="image" size={30} color="black" />
                <Text style={styles.textIcon}>Galeri</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RNModal>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
       
      </Modal> */}
    </View>
  );
};

export default TambahBarang;
