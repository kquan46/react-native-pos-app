'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class MenuActions extends Component {
    render () {
        return (
          <View style={styles.menuActions}>
            <Text>MenuActions</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    menuActions: {
      flex: 1.5,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    }
})

module.exports = MenuActions
