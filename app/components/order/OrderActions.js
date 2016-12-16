'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class OrderActions extends Component {
  constructor(props) {
    super(props)
  }
  payOrder() {
   this.props.payOrder(this.props.order.orderNumber)
  }

  render () {
    return (
      <View style={styles.orderActions}>
        <TouchableOpacity style={styles.button}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Print</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.order.orderNumber ? this.payOrder() : null}}>
          <Text>Pay</Text>
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
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(OrderActions)
