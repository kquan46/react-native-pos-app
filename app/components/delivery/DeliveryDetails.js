'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'



class DeliveryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderNumber: this.props.deliveryDetails.orderNumber,
      orderStatus: this.props.deliveryDetails.orderStatus,
      deliveryInfo: this.props.deliveryDetails.deliveryInfo,
      orderList: this.props.deliveryDetails.orderList
    }
  }

  render () {
    return (
      <TouchableOpacity>
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.deliveryDetails}>
            <Text>{this.state.deliveryInfo.deliveryAddress}</Text>
            <Text>{this.state.deliveryInfo.deliveryPhoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
