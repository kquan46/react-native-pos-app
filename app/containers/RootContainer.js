'use strict'
import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import SettingsBar from '../components/SettingsBar'
import StatusBarBackground from '../components/StatusBarBackground'

class RootContainer extends Component {
  render() {
    return (
        <View style={styles.rootContainer}>
          <StatusBarBackground />
          <SettingsBar />
          {this.props.children}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  rootContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "pink"
    }

})

module.exports = RootContainer
