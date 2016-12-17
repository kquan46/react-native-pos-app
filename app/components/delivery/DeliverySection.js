'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class DeliverySection extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  newOrder(deliveryAddress, deliveryPhoneNumber) {
    this.props.createAndSelectDeliveryOrder(deliveryAddress, deliveryPhoneNumber)
  }

  render () {
    return (
      <TouchableOpacity style={styles.deliverySection} onPress={() => {this.newOrder("address", "phonenumber") }}>
        <View style={styles.deliverySectionHeading}>
          <Text style={styles.text}>外賣</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

const HEIGHT = 80

const styles = StyleSheet.create({
  deliverySection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  deliverySectionHeading: {
    height: HEIGHT,
    width: HEIGHT,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = connect(null, mapDispatchToProps)(DeliverySection)
