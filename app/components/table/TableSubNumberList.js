'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TableSubNumber from './TableSubNumber'

class TableSubNumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableSubNumberList: this.props.tableSubNumberList
    }
  }

  render () {
    return (
      <View style={styles.tableSubNumberList}>
        {this.state.tableSubNumberList.map(i => <TableSubNumber tableSubNumber={i[0].tableInfo.tableSubNumber} orderTable={i[0]} />)}
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
