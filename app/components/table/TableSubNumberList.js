'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TableSubNumber from './TableSubNumber'

class TableSubNumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getOrderSubTable(subTableNumber) {
    let result = {}

    this.props.tableSubNumberList.map(function(i) {
      if (i.tableInfo.tableSubNumber===subTableNumber)
        result = i
    })
    return result
  }

  render () {
    return (
      <View style={styles.tableSubNumberList}>
        <TableSubNumber key="A" tableSubNumber="A" orderTable={this.getOrderSubTable("A")} />
        <TableSubNumber key="B" tableSubNumber="B" orderTable={this.getOrderSubTable("B")} />
        <TableSubNumber key="C" tableSubNumber="C" orderTable={this.getOrderSubTable("C")} />
        <TableSubNumber key="D" tableSubNumber="D" orderTable={this.getOrderSubTable("D")} />
        <TableSubNumber key="E" tableSubNumber="E" orderTable={this.getOrderSubTable("E")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tableSubNumberList: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
})

module.exports = TableSubNumberList
