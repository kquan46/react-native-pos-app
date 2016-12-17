'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TableNumber from './TableNumber'
import TableSubNumberList from './TableSubNumberList'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.table}>
        <TableNumber tableNumber={this.props.tableNumber} />
        <TableSubNumberList tableNumber={this.props.tableNumber} tableSubNumberList={this.props.orderTable} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingBottom: 15
  }
})

module.exports = Table
