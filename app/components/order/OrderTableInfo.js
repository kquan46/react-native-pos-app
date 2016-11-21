'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderTableInfo extends Component {
    render () {
        return (
          <View style={styles.orderTableInfo}>    
            <Text>Table:SubTable</Text>
            <Text>#OfPeople</Text>
            <Text>Date</Text>
            <Text>Time</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderTableInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    }
})

module.exports = OrderTableInfo