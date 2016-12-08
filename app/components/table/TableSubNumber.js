'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class TableSubNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableSubNumber: this.props.tableSubNumber,
      orderTable: this.props.orderTable
    }
  }

  render () {
    return (
      <TouchableOpacity>
        <View style={styles.tableSubNumber}>
          <View style={styles.table}>
            <Text style={styles.text}>{this.state.tableSubNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = TableSubNumber
