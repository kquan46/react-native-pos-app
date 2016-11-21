'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TableNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableNumber: this.props.tableNumber
    }
  }

  render () {
    return (
      <View style={styles.tableNumber}>
        <View style={styles.tableNumberHeading}>
          <Text style={styles.text}>{this.state.tableNumber}</Text>
        </View>
      </View>
    )
  }
}

const HEIGHT = 70

const styles = StyleSheet.create({
  tableNumber: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tableNumberHeading: {
    height: HEIGHT,
    width: HEIGHT,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  }
})

module.exports = TableNumber
