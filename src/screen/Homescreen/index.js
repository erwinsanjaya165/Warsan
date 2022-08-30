import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../../styles/Homescreen';
import {IconMenu} from '../../assets/icons';
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem('token').then(value => {
      console.log(value);
      if (value != null) {
        fetch('https://aplikasi-santri.herokuapp.com/api/home', {
          method: 'GET',
          redirect: 'follow',
          headers: {
            Authorization: `Bearer ${value}`,
          },
        })
          .then(response => response.json())
          .then(result => {
            setData(result);
            console.log(result);
          })
          .catch(error => console.log('error', error))
          .finally(() => setLoading(false));
      } else {
        navigation.replace('Login');
      }
    });

    const unsubscribe = navigation.addListener('focus', () => {
      data();
    });
    return unsubscribe();
  }, [isFocused]);

  const checkout = () => {
    AsyncStorage.getItem('token').then(value => {
      fetch('https://aplikasi-santri.herokuapp.com/api/ke_checkout', {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${value}`,
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log('ini adalah barang yang di checkout', result);
          {
            navigation.navigate('Checkout', {
              result: result,
            });
          }
        })
        .catch(error => console.log('error', error));
    });
  };

  return isLoading ? (
    <View style={styles.loading}>
      <LottieView
        source={require('../../assets/lottie/lf30_editor_jacslskt.json')}
        loop={true}
        autoPlay={true}
      />
    </View>
  ) : (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <Text style={styles.textJudul}>Warung Santri</Text>
          <Text style={styles.textJudul}>Pondok Programmer</Text>
        </View>
        <View style={styles.boxKtlog}>
          <IconMenu />
          <Text style={styles.textKtlog}>Silahkan Pilih Barang</Text>
        </View>
        <View style={styles.loading}>
          <LottieView
            source={require('../../assets/lottie/lf30_editor_jacslskt.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.containerBrang}>
          {data.map(value => {
            return <ProductItem key={value.id} value={value} />;
          })}
        </View>
      </ScrollView>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.boxBottom} onPress={() => checkout()}>
          <Text style={styles.textBottom}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

// PRODUCT
const ProductItem = ({value, index}) => {
  const [qty, setQty] = useState(0);

  const masukKeranjang = id => {
    setQty(qty + 1);
    AsyncStorage.getItem('token').then(token => {
      fetch(`https://aplikasi-santri.herokuapp.com/api/keranjang/${id}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(error => console.log('error', error));
    });
  };

  const kurangBarang = id => {
    if (qty == 0) {
      return;
    } else {
      setQty(qty - 1);
    }
    AsyncStorage.getItem('token').then(token => {
      let formdata = new FormData();
      formdata.append('_method', 'put');

      fetch(`https://aplikasi-santri.herokuapp.com/api/kurangi_barang/${id}`, {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    });
  };

  const tambahBarang = id => {
    setQty(qty + 1);
    AsyncStorage.getItem('token').then(token => {
      let formdata = new FormData();
      formdata.append('_method', 'put');

      fetch(`https://aplikasi-santri.herokuapp.com/api/tambah_barang/${id}`, {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    });
  };

  return (
    <View style={styles.container2} key={index}>
      <View style={styles.boxIndo}>
        <Image source={{uri: value.gambar_barang}} style={styles.indomie} />
        <View style={styles.boxTextIndo}>
          <Text style={styles.textIndo}>{value.nama_barang || ''}</Text>
          <Text style={styles.textHarga}>Rp. {value.harga_barang || 0}</Text>
          <Text style={styles.textHarga}>jumlah : {qty}</Text>
        </View>
      </View>
      <View style={styles.boxTotal}>
        <Text style={styles.textTotal}>total : {value.harga_barang * qty}</Text>
        <View>
          {qty == 0 ? (
            <TouchableOpacity
              style={styles.boxTambah}
              onPress={() => {
                masukKeranjang(value.id);
              }}>
              <Text style={styles.textTambah}>TambahKan</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.containerTmbah}>
              <TouchableOpacity
                style={styles.tamkur}
                onPress={() => {
                  kurangBarang(value.id);
                }}>
                <Icon name="minus" color="white" size={20} />
              </TouchableOpacity>
              <Text style={styles.textTotal}>{qty || 0}</Text>
              <TouchableOpacity
                style={styles.tamkur}
                onPress={() => {
                  tambahBarang(value.id);
                }}>
                <Icon name="plus" color="white" size={20} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
