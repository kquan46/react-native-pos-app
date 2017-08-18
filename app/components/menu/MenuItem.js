'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.text}>
          {this.props.item.menuName}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "black",
      borderWidth: 1.5,
      backgroundColor: "beige"
    },
    text: {
        textAlign: "center",
        fontSize: 30
    }
})

module.exports = MenuItem
