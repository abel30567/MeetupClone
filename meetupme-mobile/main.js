import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens/home/HomeScreen';

EStyleSheet.build(Colors);

class App extends Component {
  render() {
    return (

     <HomeScreen />
    );
  }
}

Expo.registerRootComponent(App);
