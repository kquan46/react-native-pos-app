'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Delivery from '../components/delivery/Delivery'
import TableList from '../components/table/TableList'

class TableAndDeliveryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <View style={styles.tableAndDeliveryContainer}>
          <Delivery deliveryDetailsList={this.props.deliveryOrders} />
          <TableList tableList={this.props.tableOrders} />
        </View>
    )
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

module.exports = TableAndDeliveryContainer
