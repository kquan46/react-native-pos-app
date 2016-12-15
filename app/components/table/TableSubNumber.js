'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class TableSubNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.order.orderNumber === this.props.orderTable.orderNumber ? "true" : "false"
    }
  }

  selectTable(orderTable) {
    this.props.selectOrder(orderTable)
    this.state.selected = "true"
  }

  getSubTableOpacity(){
    if (!this.props.orderTable.orderNumber)
      return 0.2
    else return 1
  }

  getSubTableBorder(){
    if (this.props.order.orderNumber === this.props.orderTable.orderNumber)
      return 4
    else return 0
  }

  getSubTableColor(){
    if (this.props.order.orderNumber === this.props.orderTable.orderNumber)
      return "blue"
    else return "green"
  }

  render () {

    return (
      <TouchableOpacity onPress={() => {this.props.orderTable.orderNumber ? this.selectTable(this.props.orderTable) : null }}>
        <View style={styles.tableSubNumber}>
          <View style={styles.table} opacity={this.getSubTableOpacity()} borderWidth={this.getSubTableBorder()} backgroundColor={this.getSubTableColor()}>
            <Text style={styles.text}>{this.props.tableSubNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

const HEIGHT = 80

const styles = StyleSheet.create({
  tableSubNumber: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  },
  table: {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: HEIGHT/2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black"
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(TableSubNumber)
