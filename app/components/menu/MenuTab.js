'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import MenuList from './MenuList'

class MenuTab extends Component {
    render () {
        return (
          <View style={styles.menuTab}>
            <Text> hello world </Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    menuTab: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      backgroundColor: "blue"
    }
})

module.exports = MenuTab
