'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import Swipeout from 'react-native-swipeout'

import OrderItemCustomization from './OrderItemCustomization'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  formatTime(time) {
    if (time != null) {
      var newTime = time.slice(0,5)
      return newTime
    }
  }

  render () {
    let swipeRightButtons = [{
      text: 'Delete',
      backgroundColor: 'red'
    }]
    let swipeLeftButtons = [{
      text: 'Edit',
      backgroundColor: 'blue'
    }]
    return (
      <Swipeout right={swipeRightButtons} left={swipeLeftButtons}>
      <View style={styles.orderItem}>
        <View style={styles.time}>
          <Text style={styles.timeText}>{this.formatTime(this.props.item.orderTime)}</Text>
        </View>
        <View style={styles.customization}>
          <Text style={styles.text}>{this.props.item.menuName}</Text>
          <OrderItemCustomization customization={this.props.item.customization}/>
        </View>
        <View style={styles.quantity}>
          <Text style={styles.text}>{this.props.item.quantity}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>{this.props.item.price}</Text>
        </View>
      </View>
      </Swipeout>
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
      paddingBottom: 3
  },
  customization: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
