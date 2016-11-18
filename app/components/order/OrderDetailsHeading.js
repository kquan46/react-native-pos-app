'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderDetailsHeading extends Component {
    render () {
        return (
          <View style={styles.orderDetailsHeading}>
            <View style={styles.time}>
              <Text>Time</Text>
            </View>
            <View style={styles.itemName}>
              <Text>Item Name</Text>
            </View>
            <View style={styles.text}>
              <Text>Qty</Text>
            </View>
            <View style={styles.price}>
              <Text>Price</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderDetailsHeading: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    time: {
        flex: 1.5,
        alignItems: "flex-start"
    },
    text: {
        flex: 1,
        alignItems: "center"
    },
    price: {
        flex: 1,
        alignItems: "center"
    },
    itemName: {
        flex: 4,
        alignItems: "flex-start",
    }
})

module.exports = OrderDetailsHeading