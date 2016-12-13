'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import DeliveryDetails from './DeliveryDetails'

class DeliveryDetailsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.deliveryDetailsList}>
        {this.props.deliveryDetailsList.map(i => <DeliveryDetails key={i.orderNumber} deliveryDetails={i} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deliveryDetailsList: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
})

module.exports = DeliveryDetailsList
