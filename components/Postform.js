import React, { Component } from 'react';
import axios from 'axios';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  AppRegistry,
} from 'react-native'; 

type Props = {};
export default class Postform extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
    }
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    axios.post("https://jsonplaceholder.typicode.com/posts", post)
      .then(({ data }) => {
        console.log(data)
      })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>Title:</Text>
        <View style={styles.inputStyle}>
          <TextInput 
            onChangeText={(title) => this.setState({title})}
          />
        </View>
        <Text>Body:</Text>
        <View style={styles.inputStyle}>
          <TextInput
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(body) => this.setState({body})}
          />
        </View>
        {"\n"}
        <TouchableOpacity onPress={this._onPressButton} >
          <View style={styles.buttonContainer}>
            <Text style={styles.submitStyle}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    fontSize: 20,
  },
  buttonContainer: {
    height: 50,
    width: 100,
    backgroundColor: "#3498DB",
  },
  submitStyle: {
    marginTop: 15,
    marginLeft: 25,
  },
  inputStyle: {
    height: 20,
    borderTopColor: '#000000',
    borderTopWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
});

AppRegistry.registerComponent('Postform', () => Postform)