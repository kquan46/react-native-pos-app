'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderInfoTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableNumber: (this.props.tableNumber),
      tableSubNumber: (this.props.tableSubNumber),
      numOfPeople: (this.props.numOfPeople),
      date: (this.props.orderDate),
      startTime: (this.props.startTime)
    }
  }

  render () {
    return (
      <View style={styles.orderInfo}>
        <Text>{this.state.tableNumber}:{this.state.tableSubNumber}</Text>
        <Text>{this.state.numOfPeople}</Text>
        <Text>{this.state.date}</Text>
        <Text>{this.state.startTime}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderInfo: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10
  }
})

module.exports = OrderInfoTable
