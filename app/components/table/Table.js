'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TableNumber from './TableNumber'
import TableSubNumberList from './TableSubNumberList'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: this.props.table
    }
  }

  render () {
    return (
      <View style={styles.table}>
        <TableNumber tableNumber={this.state.table.tableNumber} />
        <TableSubNumberList tableSubNumberList={this.state.table.tableSubNumberList} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 20
  }
})

module.exports = Table
