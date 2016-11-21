'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import OrderTableInfo from '../components/order/OrderTableInfo'
import OrderDetails from '../components/order/OrderDetails'
import OrderActions from '../components/order/OrderActions'


const order = [
  {order_number: "1", dinein_tablenumber: "5", dinein_subtablenumber: "B", dinein_numofpeople: 3},
  {order_number: "2", dinein_tablenumber: "5", dinein_subtablenumber: "C", dinein_numofpeople: 2},
  {order_number: "3", dinein_tablenumber: "1", dinein_subtablenumber: "A", dinein_numofpeople: 2}
]

class OrderContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    render () {
      return (
          <View style={styles.orderContainer}>
            <OrderTableInfo />
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

module.exports = OrderContainer
