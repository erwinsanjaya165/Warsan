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
import RNModal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../../styles/UbahBarang';

const UbahBarang = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [token, setToken] = useState('');
  const [nama_barang, setNama_barang] = useState('');
  const [harga_barang, setHarga_barang] = useState('');
  const [uri, setUri] = React.useState(null);
  const [gambar_barang, setGambar_barang] = useState('');
  const [type, setType] = useState('');
  const [fileName, setFileName] = useState('');
  const {id} = route.params;

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
        setGambar_barang(res.assets[0].uri);
        setType(res.assets[0].type);
        setFileName(res.assets[0].fileName);
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
        setGambar_barang(res.assets[0].uri);
        setType(res.assets[0].type);
        setFileName(res.assets[0].fileName);
      }
    });
  };

  useEffect(() => {
    console.log(route.params);
    AsyncStorage.getItem('token')
      .then(value => {
        if (value != null) {
          setToken(value);
          var myHeaders = new Headers();
          myHeaders.append('Authorization', `Bearer ${value}`);

          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
          };

          fetch(
            `https://aplikasi-santri.herokuapp.com/api/barang/${id}`,
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              console.log(result);
              setGambar_barang(result.gambar_barang);
              setNama_barang(result.nama_barang);
              setHarga_barang(result.harga_barang);
            })
            .catch(error => console.log('error', error))
            .finally(() => setLoading(false));
        } else {
          navigation.replace('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const TmbahBrang = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    let image = {
      uri: gambar_barang,
      type: type,
      name: fileName,
    };
    console.log('GAMBAR BOS', image);

    var formdata = new FormData();
    formdata.append('gambar_barang', image);
    formdata.append('nama_barang', nama_barang);
    formdata.append('harga_barang', harga_barang);
    formdata.append('_method', 'put');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      `https://aplikasi-santri.herokuapp.com/api/edit/${id}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('barang berhasil di tambahkan', result);
        navigation.goBack();
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
        <Text style={styles.textJudul}>Ubah Barang</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containerGambar}
          onPress={() => setModalVisible(true)}>
          <Image style={styles.gambar} source={{uri: gambar_barang}} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Nama Barang"
          value={nama_barang}
          onChangeText={nama_barang => setNama_barang(nama_barang)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Harga Barang"
          value={harga_barang}
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
    </View>
  );
};

export default UbahBarang;
