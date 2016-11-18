'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderActions extends Component {
    render () {
        return (
          <View style={styles.orderActions}>
            <Text>Edit</Text>
            <Text>Cancel</Text>
            <Text>Print</Text>
            <Text>Pay</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderActions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10
    }
})

module.exports = OrderActions