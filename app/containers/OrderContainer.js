'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import OrderTableInfo from '../components/order/OrderTableInfo'
import OrderDetails from '../components/order/OrderDetails'
import OrderActions from '../components/order/OrderActions'

class OrderContainer extends Component {
    
    render () {
      return (
          <View style={styles.orderContainer}>
            <OrderTableInfo />
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

module.exports = OrderContainer