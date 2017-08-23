'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class AppContainer extends Component {
    render() {
      return (
        <View style={styles.appContainer}>
          {this.props.children}
        </View>
      )
    }
}


const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch"
    }
})

module.exports = AppContainer
