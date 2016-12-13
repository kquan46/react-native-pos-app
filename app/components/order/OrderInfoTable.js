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
        {this.props.orderTableInfo.tableNumber ? <Text style={styles.heading}>{this.props.orderTableInfo.tableNumber}:{this.props.orderTableInfo.tableSubNumber}</Text> : null}
        {this.props.orderTableInfo.numOfPeople ? <Text style={styles.heading}>{this.props.orderTableInfo.numOfPeople}人</Text> : null}
        <Text style={styles.heading}>{this.props.orderStatus.date}</Text>
        <Text style={styles.heading}>{this.props.orderStatus.startTime}</Text>
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
  },
  heading: {
    fontSize: 20
  }
})

module.exports = OrderInfoTable
