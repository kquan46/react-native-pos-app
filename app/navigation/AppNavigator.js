'use strict'
import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

class AppNavigator extends Component {
  render() {
    return (
        <ViewContainer>
          <StatusBarBackground />
          <Text>Hello World</Text>
        </ViewContainer>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = AppNavigator