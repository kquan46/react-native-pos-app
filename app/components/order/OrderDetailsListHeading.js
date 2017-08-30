'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderDetailsListHeading extends Component {
    render () {
        return (
          <View style={styles.orderDetailsHeading}>
            <View style={styles.time}>
              <Text style={styles.text}>時間</Text>
            </View>
            <View style={styles.itemName}>
              <Text style={styles.text}>餐品</Text>
            </View>
            <View style={styles.quantity}>
              <Text style={styles.text}>數量</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.text}>總數</Text>
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
        alignItems: "flex-end",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        borderBottomWidth: 0.5
    },
    time: {
        flex: 0.8,
        alignItems: "center",
        paddingRight: 4
    },
    quantity: {
        flex: 1,
        alignItems: "center",
    },
    price: {
        flex: 0.8,
        alignItems: "flex-end"
    },
    itemName: {
        flex: 3,
        alignItems: "flex-start",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold"
    }
})

module.exports = OrderDetailsListHeading
