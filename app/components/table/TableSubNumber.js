'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TableSubNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableSubNumber: this.props.tableSubNumber
    }
  }

  render () {
    return (
      <View style={styles.tableSubNumber}>
        <View style={styles.table}>
          <Text>{this.state.tableSubNumber}</Text>
        </View>
      </View>
    )
  }
}

const HEIGHT = 70

const styles = StyleSheet.create({
  tableSubNumber: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  },
  table: {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: HEIGHT/2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green"
  }
})

module.exports = TableSubNumber
