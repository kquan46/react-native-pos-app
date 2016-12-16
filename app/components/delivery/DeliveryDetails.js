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

  getStyle() {
    if (this.props.order.orderNumber === this.props.orderDelivery.orderNumber)
        return styles.deliverySelected
    else return styles.deliveryNotSelected
  }

  render () {
    return (
      <TouchableOpacity style={styles.deliveryDetailsContainer} onPress={() => {this.selectOrder(this.props.orderDelivery) }}>
        <View style={this.getStyle()}>
          <Text>{this.props.deliveryInfo.deliveryAddress}</Text>
          <Text>{this.props.deliveryInfo.deliveryPhoneNumber}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

const HEIGHT = 70

const styles = StyleSheet.create({
  deliveryDetailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  },
  deliverySelected: {
    height: HEIGHT,
    width: 1.5*HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "grey",
    borderWidth: 4,
  },
  deliveryNotSelected: {
    height: HEIGHT,
    width: 1.5*HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "grey"
  },

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails)
