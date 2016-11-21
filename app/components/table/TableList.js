'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Table from './Table'

class TableList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableList: this.props.tableList
    }
  }

  render () {
    return (
      <View style={styles.tableList}>
        {this.props.tableList.map(i => <Table table={i.table} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tableList: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "yellow",
  }
})

module.exports = TableList
