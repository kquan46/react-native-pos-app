'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

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
        <TouchableOpacity>
          <View style={styles.tableNumberHeading}>
            <Text style={styles.text}>{this.props.tableNumber}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const HEIGHT = 80

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
    textAlign: "center",
    fontSize: 20,
  }
})

module.exports = TableNumber
