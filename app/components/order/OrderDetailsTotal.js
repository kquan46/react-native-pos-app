'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderDetailsTotal extends Component {
    render () {
        return (
          <View style={styles.orderDetailsTotal}>
            <Text>TOTAL</Text>
            <Text>$74HKD</Text>
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