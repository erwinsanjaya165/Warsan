import {Alert} from 'react-native';

export const nama = () => {
  Alert.alert('Name !', 'Anda belum mengisi nama', [
    {
      text: 'OK',
    },
  ]);
};

export const email = () => {
  Alert.alert('Email !', 'Alamat email anda salah', [
    {
      text: 'OK',
    },
  ]);
};

export const password = () => {
  Alert.alert('Password !', 'Kata sandi minimal 8 karakter', [
    {
      text: 'OK',
    },
  ]);
};

export const password_confirmation = () => {
  Alert.alert('Password_confirmation !', 'Kata sandi tidak sama', [
    {
      text: 'OK',
    },
  ]);
};

export const finish = () => {
  Alert.alert('Terdaftar !', 'Anda telah terdaftar', [], {cancelable: true});
};
