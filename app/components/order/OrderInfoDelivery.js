'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderInfoDelivery extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.orderInfo}>
        <Text>{this.props.orderDeliveryInfo.deliveryAddress}</Text>
        <Text>{this.props.orderDeliveryInfo.deliveryPhoneNumber}</Text>
        <Text>{this.props.orderStatus.date}</Text>
        <Text>{this.props.orderStatus.startTime}</Text>
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
