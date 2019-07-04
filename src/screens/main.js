import React, { Component } from 'react'
import { Text, View, Button, Alert, FlatList} from 'react-native'
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

  render() {
    return (
      <View>
        <Button title="Tambah Task" onPress={() => this.props.navigation.navigate("CreateScreen")} />
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          renderItem={({item, i}) => (
            <View style={{marginBottom:20, padding:20, borderBottomColor: "#aaa", borderBottomWidth: 1}}>
              <Text>{item.nama}</Text>
              <Text>{item.divisi_name}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}
