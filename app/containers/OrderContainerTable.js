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
        orderType: "",
        order: [],
        orderInfoTable: ""
      }
    }

    render () {
      return (
          <View style={styles.orderContainer}>
            <OrderInfoTable
              tableNumber={this.state.orderInfoTable.tableNumber}
              tableSubNumber={this.state.orderInfoTable.tableSubNumbr}
              numOfPeople={this.state.orderInfoTable.numOfPeople}
              date={this.state.orderInfoTable.date}
              startTime={this.state.orderInfoTable.startTime} />
            <OrderDetails />
            <OrderActions />
          </View>
      )
    }
}

const styles = StyleSheet.create({
    orderContainer: {
        flex: 2.5,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "purple",
    }
})

module.exports = OrderContainerTable
