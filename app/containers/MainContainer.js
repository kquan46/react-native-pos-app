'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MainRouter from '../navigation/MainRouter'

class MainContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <View style={styles.mainContainer}>
          <MainRouter />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "brown",
    }
})

module.exports = MainContainer
