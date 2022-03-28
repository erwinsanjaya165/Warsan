import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../styles/Katalog';
import {IconMenu} from '../../assets/icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

export default class Katalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      token: '',
      id: '',
      loading: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value != null) {
          this.setState({token: value});
        } else {
          this.props.navigation.replace('Login');
        }
      })
      .then(() => this.getData())
      .catch(error => console.log('error', error));

    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getData();
    });
  }

  getData() {
    this.setState({loading: true});
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.state.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://aplikasi-santri.herokuapp.com/api/home', requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({data: result});
        console.log(result);
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: false}));
  }

  hapus(id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${this.state.token}`);

    var formdata = new FormData();
    formdata.append('_method', 'delete');

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      `https://aplikasi-santri.herokuapp.com/api/delete_barang/${id}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.getData();
      })
      .catch(error => console.log('error', error))
      .finally(() => this.setState({loading: true}));
  }

  TekanHpus = id => {
    Alert.alert('Perhatian !', 'Apakah anda yakin ingin menghapusnya?', [
      {
        text: 'Batal',
      },
      {
        text: 'OK',
        onPress: () => this.hapus(id),
      },
    ]);
  };

  render() {
    return this.state.loading ? (
      <View style={{flex: 1}}>
        <LottieView
          source={require('../../assets/lottie/lf30_editor_jacslskt.json')}
          loop={true}
          autoPlay={true}
        />
      </View>
    ) : (
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.boxheader}>
            <TouchableOpacity
              style={styles.Icon}
              onPress={() => this.props.navigation.replace('Homescreen')}>
              <Icon name="arrow-left" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.textJudul}>Ubah Katalog</Text>
          </View>
          <View style={styles.boxKtlog}>
            <IconMenu />
            <Text style={styles.textKtlog}>Katalog Saya</Text>
          </View>
          <View style={styles.boxContainer}>
            {this.state.data.map((value, index) => (
              <View style={styles.container} key={index}>
                <View style={styles.boxProduct}>
                  <Image
                    source={{uri: value.gambar_barang}}
                    style={styles.gambar}
                  />
                  <View style={styles.boxTextProduct}>
                    <Text style={styles.textNamaBrang}>
                      {value.nama_barang}
                    </Text>
                    <Text style={styles.textHargaBrang}>
                      Rp. {value.harga_barang}
                    </Text>
                  </View>
                  <View style={styles.box}>
                    <TouchableOpacity
                      style={styles.boxUbah}
                      onPress={() => {
                        this.props.navigation.navigate('UbahBarang', {
                          id: value.id,
                        });
                      }}>
                      <Text style={styles.textUbah}>Ubah</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.boxHapus}
                      onPress={() => this.TekanHpus(value.id)}>
                      {this.state.loading ? (
                        <ActivityIndicator size={25} color="white" />
                      ) : (
                        <Text style={styles.textUbah}>Hapus</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.bottom}
          onPress={() => this.props.navigation.navigate('TambahBarang')}>
          <Text style={styles.textBottom}>Tambah Barang</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
