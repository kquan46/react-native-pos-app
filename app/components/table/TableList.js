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

  groupByTable(tableNumber) {
    let result = []

    this.state.tableList.map(function(i) {
      if (i.tableInfo.tableNumber===tableNumber) {
        (!result[tableNumber]) ? result[tableNumber] = [i] : result[tableNumber].push(i)
      }
    })
    return result
  }

  render () {
    return (
      <View style={styles.tableList}>
        <Table key="1" tableNumber="1" orderTable={this.groupByTable(1)} />
        <Table key="2" tableNumber="2" orderTable={this.groupByTable(2)} />
        <Table key="3" tableNumber="3" orderTable={this.groupByTable(3)} />
        <Table key="4" tableNumber="4" orderTable={this.groupByTable(4)} />
        <Table key="5" tableNumber="5" orderTable={this.groupByTable(5)} />
        <Table key="6" tableNumber="6" orderTable={this.groupByTable(6)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tableList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "yellow",
  }
})

module.exports = TableList
