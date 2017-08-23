'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class SettingsBar extends Component {

    render () {
      return (
          <View style={styles.settingsBar}>
            <Text style={styles.title}>芽莊城越南牛肉粉</Text>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    settingsBar: {
        height: 30,
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontSize: 20,
        textAlign: 'center'
    }
})

module.exports = SettingsBar
