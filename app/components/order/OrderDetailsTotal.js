'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderDetailsTotal extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.orderDetailsTotal}>
        <Text style={styles.heading}>{this.props.numOfItems ? this.props.numOfItems : 0} 項目</Text>
        <Text style={styles.heading}>總數 HK${this.props.totalPrice ? this.props.totalPrice : 0}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  orderDetailsTotal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  heading: {
    fontSize: 20
  }
})

module.exports = OrderDetailsTotal
