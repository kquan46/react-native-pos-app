'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderDetailsTotal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numOfItems: (this.props.numOfItems),
      totalPrice: (this.props.totalPrice)
    }
  }

  render () {
    return (
      <View style={styles.orderDetailsTotal}>
        <Text>TotalItem</Text>
        <Text>{this.state.numOfItems}</Text>
        <Text>TOTAL</Text>
        <Text>{this.state.totalPrice}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderDetailsTotal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
})

module.exports = OrderDetailsTotal
