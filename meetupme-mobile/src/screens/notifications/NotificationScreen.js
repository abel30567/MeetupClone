import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

class NotificationScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.redColor,
    },
    tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      )
    }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

export default NotificationScreen;
