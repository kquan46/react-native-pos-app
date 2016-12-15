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

  getStyle(){
    if (!this.props.orderTable.orderNumber)
      return styles.tableWithoutProps
    else if (this.props.order.orderNumber === this.props.orderTable.orderNumber)
        return styles.tableSelected
    else return styles.tableWithProps
  }

  render () {

    return (
      <TouchableOpacity style={styles.tableSubNumber} onPress={() => {this.props.orderTable.orderNumber ? this.selectTable(this.props.orderTable) : null }}>

          <View style={this.getStyle()}>
            <Text style={styles.text}>{this.props.tableSubNumber}</Text>
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
  tableSelected: {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: HEIGHT/2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 4,
    backgroundColor: "blue"
  },
  tableWithProps: {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: HEIGHT/2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0,
    backgroundColor: "green"
  },
  tableWithoutProps: {
    height: HEIGHT,
    width: HEIGHT,
    borderRadius: HEIGHT/2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0,
    backgroundColor: "green",
    opacity: 0.2
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(TableSubNumber)
