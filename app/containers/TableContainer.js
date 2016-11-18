'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class TableContainer extends Component {
    
    render () {
      return (
          <View style={styles.tableContainer}>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    tableContainer: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "brown",
    }
})

module.exports = TableContainer