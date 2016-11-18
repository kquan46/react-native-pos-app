'use strict'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import HomeScreen from './app/screens/HomeScreen'

export default class NhaTrangPOS extends Component {
  render() {
    return (
        <HomeScreen />
    )
  }
}

AppRegistry.registerComponent('NhaTrangPOS', () => NhaTrangPOS);
