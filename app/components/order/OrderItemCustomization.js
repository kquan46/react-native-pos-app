'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderItemCustomization extends Component {
    render () {
        return (
          <View style={styles.orderItemCustomization}>
            {this.props.children}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderItemCustomization: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
})

module.exports = OrderItemCustomization
