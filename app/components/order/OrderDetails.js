'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderDetailsListHeading from './OrderDetailsListHeading'
import OrderDetailsList from './OrderDetailsList'
import OrderItem from './OrderItem'
import OrderDetailsTotal from './OrderDetailsTotal'

class OrderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: [],
      drinkItems: [],
      totalPrice: "",
      numOfItems: ""
    }
  }

  render () {
    return (
      <View style={styles.orderDetails}>
        <OrderDetailsListHeading />
        <OrderDetailsList>
          {this.props.orderList.foodItems ? this.props.orderList.foodItems.map(i => <OrderItem item={i} />) : null}
          {this.props.orderList.drinkItems ? this.props.orderList.drinkItems.map(i => <OrderItem item={i} />) : null}
        </OrderDetailsList>
        <OrderDetailsTotal totalPrice={this.props.orderInfo.totalPrice} numOfItems={this.props.orderInfo.numOfItems} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    orderDetails: {
        flex: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "beige",
    }
})

module.exports = OrderDetails
