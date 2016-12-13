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

  render () {
    return (
      <View style={styles.tableSubNumberList}>
        {console.log(this.props.tableSubNumberList)}
        {this.props.tableSubNumberList.map(i => <TableSubNumber key={i.orderNumber} tableSubNumber={i.tableInfo.tableSubNumber} orderTable={i} />)}
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
