'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuActionsItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addItems(drinkItem, foodItem, orderNumber) {
    if (drinkItem.drink)
      this.props.findOrderAndAddDrinkItem(drinkItem, orderNumber)
    if (foodItem.ingredients.length > 0)
      this.props.findOrderAndAddFoodItem(foodItem, orderNumber)
    else console.log("nothing to add")
  }

  render () {
    return (
      <View style={styles.menuActions}>
      <View style={styles.selection}>
        <Text style={styles.text}>食品:
          {this.props.foodItem.ingredients.map(i => i.menuName)}
          {this.props.foodItem.base ? this.props.foodItem.base.name : null}</Text>
      </View>
      <View style={styles.selection}>
        <Text style={styles.text}>飲品: {this.props.drinkItem.drink ? this.props.drinkItem.drink.menuName : null}</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={() => {this.addItems(this.props.drinkItem, this.props.foodItem, this.props.order.orderNumber)}}>
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
    foodItem: state.foodItem,
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
    selection: {
      flex: 2,
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 20
    },
    text: {
      fontSize: 22
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuActionsItem)
