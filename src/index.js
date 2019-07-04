import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import main from './routing/main'

class App extends Component {
  constructor(props){
    super(props);
    
    console.disableYellowBox = true;
  }

  render() {
    const AppContainer = createAppContainer(main);
    return (
      <AppContainer/>
    );
  }
}

export default App;