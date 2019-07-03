import React, { Component } from 'react'
import { Text, View, Button, Alert, FlatList} from 'react-native'

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

    //fetch data from server
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => {
      let currentdata = this.state.data;

      responseJson.map((item) => {
        currentdata.push(item)
      })

      this.setState({loading: false, data: currentdata})
      // return responseJson;
    }).catch((error) =>{
      // return {error}
    })
  }

  render() {
    return (
      <View>
        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}
          data={this.state.data}
          renderItem={({item, i}) => (
            <View style={{marginBottom:20, padding:20, borderBottomColor: "#aaa", borderBottomWidth: 1}}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}
