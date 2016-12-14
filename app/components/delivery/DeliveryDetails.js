'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'


class DeliveryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  selectOrder(order) {
    this.props.selectOrder(order)
  }

  render () {
    return (
      <TouchableOpacity onPress={() => {this.selectOrder(this.props.orderDelivery) }}>
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.deliveryDetails}>
            <Text>{this.props.deliveryInfo.deliveryAddress}</Text>
            <Text>{this.props.deliveryInfo.deliveryPhoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
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

module.exports = connect(null, mapDispatchToProps)(DeliveryDetails)
