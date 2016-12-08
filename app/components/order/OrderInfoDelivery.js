'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderInfoDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deliveryAddress: (this.props.orderTable),
      deliveryPhoneNumber: (this.props.orderDelivery),
      date: (this.props.orderDate),
      startTime: (this.props.startTime)
    }
  }

  render () {
    return (
      <View style={styles.orderInfo}>
        <Text>{this.state.deliveryAddress}</Text>
        <Text>{this.state.deliveryPhoneNumber}</Text>
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

module.exports = OrderInfoDelivery
