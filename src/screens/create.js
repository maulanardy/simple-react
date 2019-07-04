import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export default class create extends Component {
  constructor(props){
    super(props)

    this.state = {
      category_id : "",
      nama : "",
      pic : "",
      anggota : "",
      notes : "",
      jenis_task : "",
      tindak_lanjut : "",
      task_start : "",
      task_end : "",
      task_date : "",
      task_due : ""
    }
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={{borderColor: "#CCC", borderWidth: 1, height: 30, paddingVertical: 5, paddingHorizontal: 10}} 
          placeholder="Nama"
        />
      </View>
    )
  }
}
