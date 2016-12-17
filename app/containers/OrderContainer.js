'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import OrderInfoTable from '../components/order/OrderInfoTable'
import OrderInfoDelivery from '../components/order/OrderInfoDelivery'
import OrderDetails from '../components/order/OrderDetails'
import OrderActions from '../components/order/OrderActions'

class OrderContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }

    render () {
      return (
          <View style={styles.orderContainer}>
            {this.props.order.tableInfo ? <OrderInfoTable orderTableInfo={this.props.order.tableInfo} orderInfo={this.props.order.orderInfo} /> : <OrderInfoDelivery orderDeliveryInfo={this.props.order.deliveryInfo} orderInfo={this.props.order.orderInfo} />}
            <OrderDetails orderList={this.props.order.orderList} orderInfo={this.props.order.orderInfo} />
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
        backgroundColor: "#c059e5",
    }
})

module.exports = OrderContainer
