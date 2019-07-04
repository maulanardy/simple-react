import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import mainScreen from '../screens/main'
import createScreen from '../screens/create'
import detailScreen from '../screens/detail'
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
      title: "TASK"
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
  },
  DetailScreen:{
      screen: detailScreen,
      navigationOptions: (props) => ({
        title: "Detail",
      })
  },
  CreateScreen:{
      screen: createScreen,
      navigationOptions: (props) => ({
        title: "Create",
      })
  }
},
{
  initialRouteName: "MainScreen",
  defaultNavigationOptions: HeaderStyle,
});
