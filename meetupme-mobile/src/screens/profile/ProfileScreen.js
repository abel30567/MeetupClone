import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor,
    },
    tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      )
    }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>profile screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
