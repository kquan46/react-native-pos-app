'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import Table from './Table'

class TableList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  groupByTable(tableNumber) {
    let result = []

    this.props.tableList.map(function(i) {
      if (i.tableInfo.tableNumber===tableNumber)
        result.push(i)
    })
    return result
  }

  render () {
    return (
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.tableList}>
        <Table key="1" tableNumber="1" orderTable={this.groupByTable("1")} />
        <Table key="2" tableNumber="2" orderTable={this.groupByTable("2")} />
        <Table key="3" tableNumber="3" orderTable={this.groupByTable("3")} />
        <Table key="4" tableNumber="4" orderTable={this.groupByTable("4")} />
        <Table key="5" tableNumber="5" orderTable={this.groupByTable("5")} />
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tableList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "yellow",
  }
})

module.exports = TableList
