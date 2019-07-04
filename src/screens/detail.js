import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class detail extends Component {
  constructor(props){
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <View style={{padding: 20}}>
        <Text>Nama: {this.data.nama}</Text>
        <Text>Anggota: {this.data.anggota}</Text>
        <Text>Notes: {this.data.notes}</Text>
      </View>
    )
  }
}
