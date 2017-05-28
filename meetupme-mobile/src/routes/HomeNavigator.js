import { TabNavigator } from 'react-navigation';
import Colors from '../../constants/Colors';
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
},
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: Colors.blackColor,
      activeTintColor: Colors.redColor,
      pressColor: Colors.redColor,
      indicatorStyle: { backgroundColor: Colors.redColor },
      style: {
        backgroundColor: Colors.whiteColor,
      },
    },
  });
