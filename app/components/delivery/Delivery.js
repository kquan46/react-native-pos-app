'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import DeliveryDetailsList from './DeliveryDetailsList'
import DeliverySection from './DeliverySection'

class Delivery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deliveryDetailsList: this.props.deliveryDetailsList
    }
  }

  render () {
    return (
      <View style={styles.delivery}>
        <DeliverySection />
        <DeliveryDetailsList deliveryDetailsList={this.state.deliveryDetailsList} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  delivery: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "orange",
    paddingTop: 15,
    paddingBottom: 15
  }
})

module.exports = Delivery
