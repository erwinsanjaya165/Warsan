import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  Login,
  Register,
  Checkout,
  Katalog,
  TmbahBrang,
  DtailRwyatTraksi,
  TarikDana,
  Iklan,
  TambahBarang,
  UbahBarang,
} from '../screen';
import {BottomTabs} from '../components/index';

const Stack = createNativeStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homescreen"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Katalog"
          component={Katalog}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TambahBarang"
          component={TambahBarang}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UbahBarang"
          component={UbahBarang}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DtailRwyatTraksi"
          component={DtailRwyatTraksi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TarikDana"
          component={TarikDana}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Iklan"
          component={Iklan}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
