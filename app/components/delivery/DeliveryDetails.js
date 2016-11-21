'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'



class DeliveryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deliveryDetails: this.props.deliveryDetails
    }
  }

  render () {
    return (
      <View style={styles.deliveryDetailsContainer}>
        <View style={styles.deliveryDetails}>
          <Text>{this.state.deliveryDetails.delivery_address}</Text>
          <Text>{this.state.deliveryDetails.delivery_phonenumber}</Text>
        </View>
      </View>
    )
  }
}

const HEIGHT = 50

const styles = StyleSheet.create({
  deliveryDetails: {
    height: HEIGHT,
    width: 2*HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  deliveryDetailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  }
})

module.exports = DeliveryDetails
