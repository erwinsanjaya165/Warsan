import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, RwyatTraksi, Akun} from '../../screen';
import {Warna_Disable, Warna_Utama} from '../../utils';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabs extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Warna_Utama}
        inactiveColor={Warna_Disable}
        shifting={true}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="RwyatTraksi"
          component={RwyatTraksi}
          options={{
            tabBarLabel: 'Transaksi',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="clipboard-text" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Akun"
          component={Akun}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: 'white',
            tabBarIcon: ({color}) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
