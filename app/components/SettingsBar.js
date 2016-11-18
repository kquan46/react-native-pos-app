'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class SettingsBar extends Component {
    
    render () {
      return (
          <View style={styles.settingsBar}>
            <Text style={styles.title}>Settings Bar</Text>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    settingsBar: {
        height: 30,
        backgroundColor: "blue",
        alignItems: "center"
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

module.exports = SettingsBar