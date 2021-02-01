import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './customSideBarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  MyBarters:{
      screen : MyBartersScreen,
    },
  Notifications :{
    screen : NotificationScreen
  },
    Setting : {
      screen : SettingScreen
    }
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })