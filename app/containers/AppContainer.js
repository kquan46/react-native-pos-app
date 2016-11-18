'use strict'
import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
//import AppNavigator from '../navigation/AppNavigator'
import SettingsBar from '../components/SettingsBar'
import StatusBarBackground from '../components/StatusBarBackground'

class AppContainer extends Component {
  render() {
    return (
        <View style={styles.appContainer}>
          <StatusBarBackground />
          <SettingsBar />
          {this.props.children}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "pink"
    }

})

module.exports = AppContainer