'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class OrderActions extends Component {
    render () {
        return (
          <View style={styles.orderActions}>
            <TouchableOpacity style={styles.button}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Pay</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    orderActions: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    button: {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center"
    }
})

module.exports = OrderActions
