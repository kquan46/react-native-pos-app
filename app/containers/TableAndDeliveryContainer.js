'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as orderActions from '../actions/orderActions'
import Delivery from '../components/delivery/Delivery'
import TableList from '../components/table/TableList'

class TableAndDeliveryContainer extends Component {
  constructor(props) {
    super(props)
    this.fetchOrders()
    this.state = {
    }
  }

  fetchOrders() {
    this.props.fetchOrders()
  }

  getOrders(type) {
    let result = []
    if (this.props.orders != null) {
      this.props.orders.map(function(order) {
        if (order.orderType === type && order.orderInfo.orderStatus === "notPaid")
          result.push(order)
      })
    }
    return result
  }

  render () {
    return (
        <View style={styles.tableAndDeliveryContainer}>
          <Delivery deliveryDetailsList={this.getOrders("delivery")} />
          <TableList tableList={this.getOrders("table")} />
        </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  }
}
const styles = StyleSheet.create({
    tableAndDeliveryContainer: {
        flex: 7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "brown",
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(TableAndDeliveryContainer)
