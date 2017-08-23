'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MainRouter from '../navigation/MainRouter'

class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <View style={styles.mainContainer}>
          <MainRouter menu={this.props.menu} />
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
