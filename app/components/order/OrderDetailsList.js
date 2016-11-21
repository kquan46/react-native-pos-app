'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import OrderItem from './OrderItem'

class OrderDetailsList extends Component {
    render () {
        return (
          <View style={styles.orderDetailsList}>
            {this.props.children}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderDetailsList: {
        flex: 20,
        flexDirection: "column",
        justifyContent: "flex-start"
    }
})

module.exports = OrderDetailsList