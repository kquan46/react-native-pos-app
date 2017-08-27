'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderItemCustomization from './OrderItemCustomization'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  splitCustomization(customizations) {

  }

  formatTime(time) {
    if (time != null) {
      var newTime = time.slice(0,5)
      return newTime
    }
  }

  render () {
    return (
      <View style={styles.orderItem}>
        <View style={styles.time}>
          <Text style={styles.timeText}>{this.formatTime(this.props.item.orderTime)}</Text>
        </View>
        <OrderItemCustomization>
          <Text style={styles.text}>{this.props.item.menuName}</Text>
          {this.splitCustomization(this.props.item.customization)}
        </OrderItemCustomization>
        <View style={styles.quantity}>
          <Text style={styles.text}>{this.props.item.quantity}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{this.props.item.price}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
      paddingLeft: 10,
      paddingRight: 10,
  },
  time: {
      flex: 0.9,
      alignItems: "center",
      paddingRight: 4
  },
  quantity: {
      flex: 0.7,
      alignItems: "center"
  },
  priceText: {
      textAlign: "right",
      paddingRight: 10,
      fontSize: 16
  },
  price: {
    flex: 0.8,
  },
  text: {
    fontSize: 17
  },
  timeText: {
    fontSize: 16
  }
})

module.exports = OrderItem
