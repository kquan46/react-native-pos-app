'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class MainContainer extends Component {
    render() {
      return (
        <View style={styles.mainContainer}>
          {this.props.children}
        </View>
      )
    }
}


const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch"
    }
})

module.exports = MainContainer
