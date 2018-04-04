import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AppRegistry,
} from 'react-native'; 

type Props = {};
export default class Posts extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => this.setState({ data }))
  }

  render() {
    const postItems = this.state.data.map((post) => (
      <View key={post.id}>
        <Text style={{fontSize: 40}}>{post.title}</Text>
        <Text style={{fontSize: 20}}>{post.body}</Text>
      </View>
    ));

    return (
      <View>
        {this.state.data.length ? (
          <ScrollView>
            <Text style={styles.welcome}>Posts:</Text>
            {postItems}
          </ScrollView>
        ) : (
          <View>
            <Text style={styles.welcome}>Waiting for data..</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
  },
});

AppRegistry.registerComponent('Posts', () => Posts)