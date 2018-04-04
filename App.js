import React, { Component } from 'react';
import Posts from "./components/Posts.js";
import Postform from "./components/Postform.js";
import { Provider } from 'react-redux'

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (n
      <View>
        <Postform />
        <Posts />
      </View>  
    );
  }
}
