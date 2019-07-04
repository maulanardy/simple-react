import React, { Component } from 'react'
import { Text, View, Button, Alert, FlatList, TouchableOpacity, Image} from 'react-native'
import Resource from '../network/Resource'

export default class main extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    this.setState({loading: true})
    
    Resource.getTask()
    .then((res) => {
      this.setState({loading: false, data: res.result})
    })
    .catch((err) => {
      alert(err)
    })
  }

  deleteTask(task){
    let taskId = task.id

    Resource.deteleTask(taskId)
    .then((res) => {
      alert("Berhasil di delete")
      this.deleteItemById(task.id)
    })
    .catch((err) => {
      alert(err)
    })
  }

  deleteItemById(id){
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }

  render() {
    return (
      <View>
        <Button title="Tambah Task" onPress={() => this.props.navigation.navigate("CreateScreen")} />
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailScreen",{
                data: this.state.data[index]
              })}
            }>
              <View style={{marginBottom:20, padding:20, borderBottomColor: "#aaa", borderBottomWidth: 1, flexDirection: "row"}}>
                <View style={{flex:1}}>
                  <Text>{item.nama}</Text>
                  <Text>{item.divisi_name}</Text>
                </View>
                <TouchableOpacity style={{marginHorizontal:10}} onPress={() => {
                  this.props.navigation.navigate("EditScreen", {
                    data: this.state.data[index]
                  })
                  }}>
                  <View style={{backgroundColor:"#2ecc71", padding:5, justifyContent:"center", alignItems:"center", width:30, height:30, borderRadius: 15}}>
                    <Image style={{width: 13, height:13, tintColor:"#FFF"}} source={require("../assets/images/edit.png")}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.deleteTask(this.state.data[index])}>
                  <View style={{backgroundColor:"#c0392b", padding:5, justifyContent:"center", alignItems:"center", width:30, height:30, borderRadius: 15}}>
                    <Image style={{width: 13, height:13, tintColor:"#FFF"}} source={require("../assets/images/delete.png")}/>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
