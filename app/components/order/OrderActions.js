'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'
import { Actions } from 'react-native-router-flux'

class OrderActions extends Component {
  constructor(props) {
    super(props)
  }
  payOrder() {
   this.props.payOrder(this.props.order.orderNumber)
  }
  cancelOrder() {
   this.props.cancelOrder(this.props.order.orderNumber)
  }

  render () {
    return (
      <View style={styles.orderActions}>
        <TouchableOpacity style={styles.button} onPress={() => Actions.pop()}>
          <Text style={styles.text}>Table/Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.order.orderNumber ? this.cancelOrder() : null}}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Actions.menu()}>
          <Text style={styles.text}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.order.orderNumber ? this.payOrder() : null}}>
          <Text style={styles.text}>Pay</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

const styles = StyleSheet.create({
    orderActions: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    button: {
      flex: 1,
      backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      color: "white",
      fontSize: 18
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(OrderActions)
