'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class MenuTab extends Component {
    render () {
        return (
          <View style={styles.menuTab}>
            <Text>MenuTab</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    menuTab: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    }
})

module.exports = MenuTab
