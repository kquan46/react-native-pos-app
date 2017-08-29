'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, } from 'react-native'

class OrderItemCustomization extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  splitCustomization(customizations) {

  }

  render () {
    let split = this.props.customization === "" ? [] : this.props.customization.split(',')
    return (
      <View>
      {split.map(i => <Text style={styles.text}>  •{i}</Text>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 15
    }
})

module.exports = OrderItemCustomization
