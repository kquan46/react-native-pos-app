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
    }
  }

  selectTable(orderTable) {
    this.props.selectOrder(orderTable)
  }

  render () {
    return (
      <TouchableOpacity onPress={() => {this.selectTable(this.props.orderTable) }}>
        <View style={styles.tableSubNumber}>
          <View style={styles.table}>
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

const HEIGHT = 70

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
    backgroundColor: "green",
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})

module.exports = connect(null, mapDispatchToProps)(TableSubNumber)
