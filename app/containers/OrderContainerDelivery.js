'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import OrderInfoTable from '../components/order/OrderInfoTable'
import OrderInfoDelivery from '../components/order/OrderInfoDelivery'
import OrderDetails from '../components/order/OrderDetails'
import OrderActions from '../components/order/OrderActions'

class OrderContainerDelivery extends Component {
    constructor(props) {
      super(props)
      this.state = {
        orderType: "",
        order: [],
        orderInfoDelivery: ""
      }
    }

    render () {
      return (
          <View style={styles.orderContainer}>
            <OrderInfoDelivery />
            <OrderDetails />
            <OrderActions />
          </View>
      )
    }
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 2.5,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "purple",
    }
})

module.exports = OrderContainerDelivery
