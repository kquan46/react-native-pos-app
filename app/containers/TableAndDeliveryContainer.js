'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Delivery from '../components/delivery/Delivery'
import TableList from '../components/table/TableList'

const delivery = [
  {delivery_address: "250鴨寮街", delivery_phonenumber: "25800983"},
  {delivery_address: "113福榮街", delivery_phonenumber: "29988365"},
  {delivery_address: "福榮街", delivery_phonenumber: "66534621"},
  {delivery_address: "68南昌街", delivery_phonenumber: "83849594"}
]

const tableList = [
  {table: {tableNumber: 1, tableSubNumberList: [{tableSubNumber: "C"}]}},
  {table: {tableNumber: 2, tableSubNumberList: [{tableSubNumber: "A"}]}},
  {table: {tableNumber: 3, tableSubNumberList: []}},
  {table: {tableNumber: 4, tableSubNumberList: [{tableSubNumber: "B"}, {tableSubNumber: "C"}]}},
  {table: {tableNumber: 5, tableSubNumberList: []}},
]

class TableAndDeliveryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableList: (tableList),
      delivery: (delivery)
    }
  }

    render () {
      return (
          <View style={styles.tableAndDeliveryContainer}>
            <Delivery deliveryDetailsList={this.state.delivery}/>
            <TableList tableList={this.state.tableList} />
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
