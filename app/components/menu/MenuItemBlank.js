'use strict'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class MenuItemBlank extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.itemNotSelected}  />
    )
  }
}

const styles = StyleSheet.create({
    itemNotSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "teal",
      borderWidth: 1.5,
    },
})

module.exports = MenuItemBlank
