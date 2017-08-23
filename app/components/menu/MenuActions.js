'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuActions extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addItems(drinkItem, orderNumber) {
    if (drinkItem.name)
      this.props.findOrderAndAddDrinkItem(drinkItem, orderNumber)
  }

  render () {
    return (
      <View style={styles.menuActions}>
        <View style={styles.placeholder} />
        <TouchableOpacity style={styles.button} onPress={() => {this.addItems(this.props.drinkItem, this.props.order.orderNumber)}}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    drinkItem: state.drinkItem,
    order: state.order
  }
}

const styles = StyleSheet.create({
    menuActions: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "stretch",
      backgroundColor: "pink"
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "grey",
      padding: 15
    },
    placeholder: {
      flex: 4
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuActions)
