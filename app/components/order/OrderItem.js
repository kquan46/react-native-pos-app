'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderItemCustomization from './OrderItemCustomization'

class OrderItem extends Component {
    render () {
        return (
          <View style={styles.orderItem}>
            <View style={styles.time}>
              <Text>12:30</Text>
            </View>
            <OrderItemCustomization>
              <Text>蝦膠扎肉番茄湯米粉</Text>
              <Text> -少芽菜</Text>
            </OrderItemCustomization>
            <View style={styles.text}>
              <Text>1</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.priceText}>37</Text>
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
        flex: 1.5,
        alignItems: "flex-start"
    },
    text: {
        flex: 1,
        alignItems: "center"
    },
    priceText: {
        textAlign: "right"
    }
})

module.exports = OrderItem