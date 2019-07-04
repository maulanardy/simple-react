import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Resource from '../network/Resource'
import DatePicker from 'react-native-datepicker'

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

  submitTask(){
    let body = {
      "category_id" : this.state.category_id,
      "nama" : this.state.nama,
      "pic" : this.state.pic,
      "anggota" : this.state.anggota,
      "notes" : this.state.notes,
      "jenis_task" : this.state.jenis_task,
      "tindak_lanjut" : this.state.tindak_lanjut,
      "task_start" : this.state.task_start,
      "task_end" : this.state.task_end,
      "task_date" : this.state.task_date,
      "task_due" : this.state.task_due
    }

    Resource.createTask(body)
    .then((res) => {
      this.resetForm();
      alert("Submit Sukses")
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  resetForm(){
    this.setState({
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
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={myStyle.form} 
          value={this.state.category_id}
          onChangeText={(category_id) => this.setState({category_id})}
          placeholder="Category"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.nama}
          onChangeText={(nama) => this.setState({nama})}
          placeholder="Nama"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.pic}
          onChangeText={(pic) => this.setState({pic})}
          placeholder="P.I.C"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.anggota}
          onChangeText={(anggota) => this.setState({anggota})}
          placeholder="Anggota"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.notes}
          onChangeText={(notes) => this.setState({notes})}
          placeholder="Notes"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.jenis_task}
          onChangeText={(jenis_task) => this.setState({jenis_task})}
          placeholder="Jenis Task"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.tindak_lanjut}
          onChangeText={(tindak_lanjut) => this.setState({tindak_lanjut})}
          placeholder="Tindak Lanjut"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.task_start}
          onChangeText={(task_start) => this.setState({task_start})}
          placeholder="Task Start"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.task_end}
          onChangeText={(task_end) => this.setState({task_end})}
          placeholder="Task End"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.task_date}
          onChangeText={(task_date) => this.setState({task_date})}
          placeholder="Task Date"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.task_due}
          onChangeText={(task_due) => this.setState({task_due})}
          placeholder="Task Due"
        />
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitTask()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
