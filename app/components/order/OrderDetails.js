'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderDetailsHeading from './OrderDetailsHeading'
import OrderDetailsList from './OrderDetailsList'
import OrderItem from './OrderItem'
import OrderDetailsTotal from './OrderDetailsTotal'

class OrderDetails extends Component {
    render () {
        return (
          <View style={styles.orderDetails}>
            <OrderDetailsHeading />
            <OrderDetailsList>
              <OrderItem />
              <OrderItem />
            </OrderDetailsList>
            <OrderDetailsTotal />
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