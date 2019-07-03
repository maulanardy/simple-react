import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import mainScreen from '../screens/main'
import profileScreen from '../screens/profile'

const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: '#F7CA18',
    textAlign: 'center',
    fontWeight: 'normal'
  },
  headerTintColor: '#deffffff',
})

const MainTab = createMaterialTopTabNavigator({
  MainTab: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "PESERTA"
    })
  },Second: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "PESERTA 2"
    })
  },
  ProfileTab: {
    screen: profileScreen,
    navigationOptions: (props) => ({
      title: "ABOUT"
    })
  },
}, 
{
  lazy: true,
  optimizationsEnabled: true,
  tabBarOptions:{
    activeTintColor: '#1f1f1f',
    inactiveBackgroundColor:'#F00',
    inactiveTintColor: '#afafaf',

    labelStyle:{
      // color:"#1f1f1f", 
      fontSize:14, 
      paddingVertical: 1
    },
    pressColor: '#afafaf',
    indicatorStyle:{
      backgroundColor: '#cc1219',
    },
    style: {
      backgroundColor: '#FFFFFF',
    },
    tabStyle: {
      // marginBottom:2,
      // backgroundColor: '#FFFFFF'
    }
  }
});

export default Main = createStackNavigator({
  MainScreen:{
      screen: MainTab,
      navigationOptions: (props) => ({
        title: "Beranda",
      })
  }
},
{
  initialRouteName: "MainScreen",
  defaultNavigationOptions: HeaderStyle,
});
