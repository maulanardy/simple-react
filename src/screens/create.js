import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF", 
    backgroundColor: "#FEFEFE",
    borderWidth: 1, 
    height: 30, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    marginBottom: 10
  }
})

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
          style={myStyle.form} 
          placeholder="Category"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Nama"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="P.I.C"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Anggota"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Notes"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Jenis Task"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Tindak Lanjut"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Task Start"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Task End"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Task Date"
        />
        <TextInput 
          style={myStyle.form} 
          placeholder="Task Due"
        />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => alert("sfd")}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
