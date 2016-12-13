'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import OrderInfoTable from '../components/order/OrderInfoTable'
import OrderDetails from '../components/order/OrderDetails'
import OrderActions from '../components/order/OrderActions'

class OrderContainerTable extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render () {
      return (
          <View style={styles.orderContainer}>
            <OrderInfoTable orderTableInfo={this.props.order.tableInfo} orderStatus={this.props.order.orderStatus} />
            <OrderDetails orderList={this.props.order.orderList} orderStatus={this.props.order.orderStatus} />
            <OrderActions />
          </View>
      )
    }
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "purple",
    }
})

module.exports = OrderContainerTable
