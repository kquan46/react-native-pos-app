'use strict'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import HomeScreen from './app/screens/HomeScreen'
import codePush from 'react-native-code-push'

export default class NhaTrangPOS extends Component {
  render() {
    return (
        <HomeScreen />
    )
  }
}

AppRegistry.registerComponent('NhaTrangPOS', () => codePush(NhaTrangPOS));
